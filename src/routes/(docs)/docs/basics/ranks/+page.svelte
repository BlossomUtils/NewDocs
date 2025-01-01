<script>
    import { Modal } from "@skeletonlabs/skeleton-svelte";
    
    let openState = $state(false);
    
      function modalClose() {
        openState = false;
      }
    </script>
    <div class='flex flex-col bg-cover bg-center min-h-full justify-center items-center'>
        <h1 class='h1'>Ranks</h1>
        <div class='h-2'></div>
        <p>In Blossom Essentials, ranks are unique from alot of addons. To set up a rank, you need to create one first</p>
        <div class='h-4'></div>
        <Modal
        bind:open={openState}
        triggerBase="btn preset-tonal"
        contentBase="card bg-surface-100-900 p-4 space-y-4 shadow-xl max-w-screen-sm"
        backdropClasses="backdrop-blur-sm"
      >
        {#snippet trigger()}Add Rank UI{/snippet}
        {#snippet content()}
          <article>
              <img src='/addrank.png'><img>
          </article>
        {/snippet}
      </Modal>
      <div class='h-4'></div>
      <p>You must fill out all fields in this UI for it to work!</p>
      <div class='h-2'></div>
      <p>When you create a rank, you must do <code class='code'>/tag "Example Player" add "Example Rank"</code></p>
    
        <div class='absolute bottom-0 left-0 m-4'>
            <div>
                <a class="card preset-outlined-primary-500 p-6" href="/docs/basics/config">
                    Last Page
                </a>
            </div>
        </div>
        <div class='absolute bottom-0 right-0 m-4'>
            <div>
                <a class="card preset-outlined-primary-500 p-6" href="/docs/basics/platform-settings">
                    Next Page
                </a>
            </div>
        </div>
    </div>
    
    