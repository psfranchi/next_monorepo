'use client';

import { PageHeader, Button, Card } from '@platform/ui';
import { track } from '@platform/analytics';
import { PLATFORM_NAME, DEFAULT_LOCALE } from '@platform/config';
import { formatTitle } from '@platform/utils';

export default function Home() {
  const handleCta = () => {
    track('cta_clicked', { page: 'home', app: 'site-a' });
  };

  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <PageHeader
        title={formatTitle('site a – baseline marketing')}
        description={`Part of ${PLATFORM_NAME}. Locale: ${DEFAULT_LOCALE}.`}
      />
      <Card title="Welcome">
        <p>This is the baseline marketing site using shared UI, config, utils, and analytics.</p>
        <Button variant="primary" onClick={handleCta}>
          Get started
        </Button>
      </Card>
    </main>
  );
}
