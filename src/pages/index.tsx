import { signIn, signOut, useSession } from 'next-auth/react';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  const { data: session } = useSession();
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <div className='border-2 p-6'>
              {session ? (
                <>
                  Signed in as {session.user?.email} <br />
                  <button className='border-2 p-3' onClick={() => signOut()}>
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  Not signed in <br />
                  <button className='border-2 p-3' onClick={() => signIn()}>
                    Sign in
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
