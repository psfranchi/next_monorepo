'use client';

import useSWR from 'swr';
import axios from 'axios';
import { PageHeader, Card } from '@platform/ui';
import { track } from '@platform/analytics';
import { isExternalUrl } from '@platform/utils';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function Home() {
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts/1',
    fetcher
  );

  track('page_view', { page: 'home', app: 'site-e' });

  const sampleUrl = 'https://example.com';
  const isExternal = isExternalUrl(sampleUrl);

  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <PageHeader
        title="Site E – API & Data"
        description="Uses axios and SWR with shared UI and utils."
      />
      <Card title="Mock API (SWR + axios)">
        {isLoading && <p>Loading…</p>}
        {error && <p>Error loading data</p>}
        {data && (
          <div>
            <p><strong>{data.title}</strong></p>
            <p>{data.body}</p>
          </div>
        )}
      </Card>
      <Card title="Utils demo">
        <p>isExternalUrl(&quot;{sampleUrl}&quot;) = {String(isExternal)}</p>
      </Card>
    </main>
  );
}
