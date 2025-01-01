<script>
    import { Modal } from "@skeletonlabs/skeleton-svelte";
    
    let openState = $state(false);
    
      function modalClose() {
        openState = false;
      }
    </script>
    <div class='flex flex-col bg-cover bg-center min-h-full justify-center items-center'>
        <h1 class='h1'>UI Builder</h1>
        
    
        <div class='absolute bottom-0 left-0 m-4'>
            <div>
                <a class="card preset-outlined-primary-500 p-6" href="/docs/basics/platform-settings">
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
    
    