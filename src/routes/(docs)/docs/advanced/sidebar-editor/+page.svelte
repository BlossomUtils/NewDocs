<script>
    import { Modal } from "@skeletonlabs/skeleton-svelte";
    
    let openState = $state(false);
    
      function modalClose() {
        openState = false;
      }
      let openState2 = $state(false);
    
      function modalClose2() {
        openState2 = false;
      }
    </script>
    <div class='flex flex-col bg-cover bg-center min-h-full justify-center items-center'>
        <h1 class='h1'>Sidebar Editor</h1>
        <p>The Sidebar Editor is one of the most complicated, but useful features in Blossom. This page will teach you how to use it!</p>
        <div class='h-2'></div>
        <h3 class='h3'>Adding a sidebar</h3>
        <p>To add a sidebar, go to the Sidebar Editor in the Config UI and then click <code class='code'>Add sidebar.</code></p>
        
        <p>If this is the default sidebar, make the name <code class='code'>Default</code>.</p>
        <div class='h-2'></div>
        <Modal
  bind:open={openState}
  triggerBase="btn preset-tonal"
  contentBase="card bg-surface-100-900 p-4 space-y-4 shadow-xl max-w-screen-sm"
  backdropClasses="backdrop-blur-sm"
>
  {#snippet trigger()}View Form{/snippet}
  {#snippet content()}
    <article>
        <img src='/sidebar-add.png'><img>
    </article>
  {/snippet}
  
</Modal>
<div class='h-2'></div>
<p>After you have done this, restart the server for the changes to take effect.</p>
<div class='h-2'></div>
<h3 class='h3'>Changing Sidebar</h3>
<p>To change the sidebar you are viewing, do this command: <code class='code'>/tag @s add sidebar:sidebarName</code></p>
<p>To go back to the Default Sidebar, just type: <code class='code'>/tag @s remove sidebar:sidebarName</code></p>
<div class='h-2'></div>
<h3 class='h3'>Adding a line</h3>
<p>To add a line, go to the sidebar you want to edit, and then click "Add line"</p>
<p>While editing the line's text, if you want to display a scoreboard value, wrap the scoreboard value in brackets.</p>
<p>Example: <code class='code'>Money: {"{{money}}"}</code></p>
<div class='h-2'></div>
<Modal
  bind:open={openState2}
  triggerBase="btn preset-tonal"
  contentBase="card bg-surface-100-900 p-4 space-y-4 shadow-xl max-w-screen-sm"
  backdropClasses="backdrop-blur-sm"
>
  {#snippet trigger()}View Form{/snippet}
  {#snippet content()}
    <article>
        <img src='/sidebar-addline.png'><img>
    </article>
  {/snippet}
  
</Modal>
    
        <div class='absolute bottom-0 left-0 m-4'>
            <div>
                <a class="card preset-outlined-primary-500 p-6" href="/docs/advanced/ui-builder">
                    Last Page
                </a>
            </div>
        </div>
        <div class='absolute bottom-0 right-0 m-4'>
            <div>
                <a class="card preset-outlined-primary-500 p-6" href="/docs/advanced/sidebar-editor">
                    Next Page
                </a>
            </div>
        </div>
    </div>
    
    