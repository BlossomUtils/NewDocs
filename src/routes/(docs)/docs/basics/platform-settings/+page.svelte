<script>
    import { Modal } from "@skeletonlabs/skeleton-svelte";
    
    let openState = $state(false);
    let openState2 = $state(false);
      function modalClose() {
        openState = false;
      }
      function modalClose2() {
        openState2 = false;
      }
    </script>
    <div class='flex flex-col bg-cover bg-center min-h-full justify-center items-center'>
        <h1 class='h1'>Platform Settings</h1>
        <p>In Blossom Essentials, you can edit how your game behaves depending on your platform type.</p>

        <p>For example: you can make a command block that has the command <code class='code'>/execute as @a[tag=platform_desktop] run scriptevent blossom:open softlock_ui</code>. This softlocks them from being on your server without straight up banning them!</p>
        <div class='h-4'></div>
        <Modal
        bind:open={openState}
        triggerBase="btn preset-tonal"
        contentBase="card bg-surface-100-900 p-4 space-y-4 shadow-xl max-w-screen-sm"
        backdropClasses="backdrop-blur-sm"
      >
        {#snippet trigger()}View Command{/snippet}
        {#snippet content()}
          <article>
              <img src='/cmdblock_platformsettings.png'><img>
          </article>
        {/snippet}
      </Modal>
      <div class='h-4'></div>
      <p>In some cases, you would just want to straight up ban a platform from your server.</p>
      <p>To ban a platform, navigate to platform settings and the platform and click 'Banned.'</p>
      <div class='h-4'></div>
      <Modal
        bind:open={openState2}
        triggerBase="btn preset-tonal"
        contentBase="card bg-surface-100-900 p-4 space-y-4 shadow-xl max-w-screen-sm"
        backdropClasses="backdrop-blur-sm"
      >
        {#snippet trigger()}View UI{/snippet}
        {#snippet content()}
          <article>
              <img src='/platformsettings_bans.png'><img>
          </article>
        {/snippet}
      </Modal>
        <div class='absolute bottom-0 left-0 m-4'>
            <div>
                <a class="card preset-outlined-primary-500 p-6" href="/docs/basics/ranks">
                    Last Page
                </a>
            </div>
        </div>
        <div class='absolute bottom-0 right-0 m-4'>
            <div>
                <a class="card preset-outlined-primary-500 p-6" href="/docs/advanced/ui-builder">
                    Next Page
                </a>
            </div>
        </div>
    </div>
    
    