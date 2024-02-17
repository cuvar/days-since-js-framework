<script>
  import { browser } from "$app/environment";
  import Footer from "$lib/Footer.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
  import "../app.css";

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
      },
    },
  });
</script>

<QueryClientProvider client={queryClient}>
  <div class="font-mono w-screen h-full min-h-screen">
    <Navbar />
    <main class="h-full w-full py-10">
      <slot />
    </main>
    <Footer />
    <script
      defer
      data-domain="dayssincelastjsframework.com"
      src="https://plausible.io/js/script.js"
    ></script>
  </div>
</QueryClientProvider>
