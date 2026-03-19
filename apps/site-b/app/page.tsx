'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { PageHeader, Button, Card } from '@platform/ui';
import { track } from '@platform/analytics';
import { slugify } from '@platform/utils';

const schema = z.object({
  email: z.string().email('Invalid email'),
  name: z.string().min(1, 'Name required'),
});

type FormData = z.infer<typeof schema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    track('form_submitted', { ...data, slug: slugify(data.name) });
  };

  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <PageHeader
        title="Site B – Forms & Validation"
        description="Uses react-hook-form and zod with shared UI and utils."
      />
      <Card title="Contact form">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              {...register('name')}
              style={{ display: 'block', width: '100%', padding: 8, marginTop: 4 }}
            />
            {errors.name && <span style={{ color: 'red', fontSize: 12 }}>{errors.name.message}</span>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              {...register('email')}
              style={{ display: 'block', width: '100%', padding: 8, marginTop: 4 }}
            />
            {errors.email && <span style={{ color: 'red', fontSize: 12 }}>{errors.email.message}</span>}
          </div>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </form>
      </Card>
    </main>
  );
}
