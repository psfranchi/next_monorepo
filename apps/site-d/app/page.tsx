'use client';

import { v4 as uuidv4 } from 'uuid';
import { PageHeader, Button, Card } from '@platform/ui';
import { track, identify } from '@platform/analytics';
import { FEATURE_FLAGS } from '@platform/config';

export default function Home() {
  const sessionId = uuidv4();

  const handleIdentify = () => {
    identify(sessionId, { source: 'site-d', timestamp: new Date().toISOString() });
  };

  const handleTrack = () => {
    track('custom_event', {
      eventId: uuidv4(),
      sessionId,
      analyticsEnabled: FEATURE_FLAGS.analytics,
    });
  };

  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <PageHeader
        title="Site D – Analytics"
        description="Analytics-heavy site using @platform/analytics and uuid."
      />
      <Card title="Session & events">
        <p>Session ID: {sessionId}</p>
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <Button variant="primary" onClick={handleIdentify}>
            Identify session
          </Button>
          <Button variant="outline" onClick={handleTrack}>
            Track event
          </Button>
        </div>
      </Card>
    </main>
  );
}
