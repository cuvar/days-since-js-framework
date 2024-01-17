<script>
  import Footer from "$lib/Footer.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import "../app.css";
</script>

<div class="font-mono w-screen h-screen">
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
