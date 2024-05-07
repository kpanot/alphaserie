<script>
  import "../app.pcss";
  import { browser } from '$app/environment'
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
  import { Footer, FooterCopyright, FooterIcon } from 'flowbite-svelte';
  import { GithubSolid, HeartSolid } from 'flowbite-svelte-icons';

  export const prerender = true;

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
      },
    },
  });
</script>

<div class="app bg-white dark:bg-black">
  <QueryClientProvider client={queryClient}>
    <main>
      <slot></slot>
    </main>
  </QueryClientProvider>
  <Footer footerType="socialmedia" class="border-t bg-gray-50 border-grey-600 mt-12">
    <div class="flex sm:items-center sm:justify-between container mx-auto">
      <div class="flex-1 text-xs">
        <span class="text-gray-400">Made with <HeartSolid class="w-4 h-4 inline-block sm:justify-between text-primary-600" /> by</span>
        <FooterCopyright href="https://github.com/kpanot" by="Kilian" copyrightMessage="" spanClass="inline-block" />
      </div>
      <div class="flex-none space-x-6 rtl:space-x-reverse sm:justify-center sm:mt-0">
        <FooterIcon href="https://github.com/kpanot/alphaserie" title="Github">
          <GithubSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
      </div>
    </div>
  </Footer>
</div>
