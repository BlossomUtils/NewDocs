<script>
import { Modal } from "@skeletonlabs/skeleton-svelte";

let openState = $state(false);

  function modalClose() {
    openState = false;
  }
</script>
<div class='flex flex-col bg-cover bg-center min-h-full justify-center items-center'>
    <h1 class='h1'>Config UI</h1>
    <div class='h-2'></div>
    <p>To open the Config UI, either type Config UI into the creative menu and then use it, or type <code class='code'>/give @s blossom:config</code></p>
    <p>Once you have the Config UI, you can use it to configure the mod to your liking.</p>
    <p>If you can't use the Config UI, do <code class='code'>/tag @s add admin</code></p>
    <div class='h-4'></div>
    <Modal
  bind:open={openState}
  triggerBase="btn preset-tonal"
  contentBase="card bg-surface-100-900 p-4 space-y-4 shadow-xl max-w-screen-sm"
  backdropClasses="backdrop-blur-sm"
>
  {#snippet trigger()}View Image{/snippet}
  {#snippet content()}
    <article>
        <img src='/configui.png'><img>
    </article>
  {/snippet}
</Modal>

    <div class='absolute bottom-0 left-0 m-4'>
        <div>
            <a class="card preset-outlined-primary-500 p-6" href="/docs/basics/installation">
                Last Page
            </a>
        </div>
    </div>
    <div class='absolute bottom-0 right-0 m-4'>
        <div>
            <a class="card preset-outlined-primary-500 p-6" href="/docs/basics/ranks">
                Next Page
            </a>
        </div>
    </div>
</div>

