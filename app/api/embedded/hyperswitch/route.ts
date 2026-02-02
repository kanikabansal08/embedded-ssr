import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const apiKey = process.env.HYPERSWITCH_API_KEY;
    const profileId = process.env.HYPERSWITCH_PROFILE_ID;
    const baseUrl = process.env.HYPERSWITCH_BASE_URL || 'https://app.hyperswitch.io';

    if (!apiKey || !profileId) {
      return NextResponse.json(
        {
          error: 'Missing required environment variables: HYPERSWITCH_API_KEY and HYPERSWITCH_PROFILE_ID',
        },
        { status: 500 }
      );
    }

    const response = await axios.get(
      `${baseUrl}/api/embedded/token`,
      {
        headers: {
          'api-key': apiKey,
          'x-profile-id': profileId,
          'Content-Type': 'application/json',
        },
      }
    );

    return NextResponse.json({
      success: true,
      data: response.data,
    });
  } catch (error: any) {
    console.error('Error calling Hyperswitch API:', error.message);
    return NextResponse.json(
      {
        error: 'Failed to fetch token from Hyperswitch API',
        details: error.message,
      },
      { status: 500 }
    );
  }
}