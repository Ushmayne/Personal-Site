import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { animal } = await request.json();

  if (!animal) {
    return NextResponse.json({ error: 'Animal is required' }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'OpenAI API key is not configured' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a fun and engaging wildlife educator. Provide a single, interesting and fun fact about animals in 1-2 sentences. Make it educational but entertaining.',
          },
          {
            role: 'user',
            content: `Tell me a fun fact about ${animal}.`,
          },
        ],
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API Error:', errorData);
      return NextResponse.json(
        { error: 'Failed to fetch fun fact from OpenAI' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const funFact = data.choices[0]?.message?.content || 'Could not generate a fun fact.';

    return NextResponse.json({ funFact });
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching the fun fact' },
      { status: 500 }
    );
  }
}
