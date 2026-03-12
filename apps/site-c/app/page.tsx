import { format } from 'date-fns';
import clsx from 'clsx';
import { PageHeader, Section, Card } from '@platform/ui';
import { track } from '@platform/analytics';
import { FEATURE_FLAGS } from '@platform/config';

const publishedAt = new Date('2025-01-15');
const updatedAt = new Date();

export default function Home() {
  track('page_view', { page: 'home', app: 'site-c' });

  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <PageHeader
        title="Site C – Content"
        description="Content-heavy site using date-fns and clsx with shared UI and config."
      />
      <Section title="Latest content">
        <Card
          title="Sample article"
          className={clsx('content-card', FEATURE_FLAGS.contentDates && 'content-dates-enabled')}
          style={
            FEATURE_FLAGS.contentDates
              ? { borderLeft: '4px solid #2563eb' }
              : undefined
          }
        >
          <p>Published: {format(publishedAt, 'PPP')}</p>
          <p>Updated: {format(updatedAt, 'PPp')}</p>
        </Card>
      </Section>
    </main>
  );
}
