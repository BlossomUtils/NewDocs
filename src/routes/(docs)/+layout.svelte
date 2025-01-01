<script lang="ts">
  import "../../app.css";
  import {
    computePosition,
    autoUpdate,
    offset,
    shift,
    flip,
    arrow,
  } from "@floating-ui/dom";
  import { AppBar, Avatar, Modal } from "@skeletonlabs/skeleton-svelte";
  import { Navigation } from "@skeletonlabs/skeleton-svelte";
  import { onMount } from "svelte";
  let { children } = $props();
  onMount(() => {
    if (localStorage.getItem("theme")) {
      document.body.setAttribute(
        "data-theme",
        `${localStorage.getItem("theme")}`,
      );
    }
  });
  let openState = $state(false);
  function modalClose() {
    openState = false;
  }
  function updateTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    modalClose();
  }
</script>

<div class="card h-[100vh] w-full overflow-auto flex flex-col">
  <AppBar>
    {#snippet lead()}
      <a href="/" class="h4">Blossom Essentials</a>
      <a class="btn preset-outlined-primary-500" href="/docs">Documentation</a>
      <Modal
        bind:open={openState}
        triggerBase="btn preset-tonal"
        contentBase="card bg-surface-100-900 p-4 space-y-4 shadow-xl max-w-screen-sm"
        backdropClasses="backdrop-blur-sm"
      >
        {#snippet trigger()}Themes{/snippet}
        {#snippet content()}
          <header class="flex justify-between">
            <h2 class="h2">Update Theme</h2>
          </header>
          <article>
            <button
              class="btn preset-outlined-primary-500"
              on:click={() => updateTheme("crimson")}>Crimson</button
            >
            <button
              class="btn preset-outlined-primary-500"
              on:click={() => updateTheme("cerberus")}>Cerberus</button
            >
            <button
              class="btn preset-outlined-primary-500"
              on:click={() => updateTheme("rose")}>Rose</button
            >
          </article>
        {/snippet}
      </Modal>
    {/snippet}
    {#snippet trail()}
      <a class="btn preset-outlined-primary-500" href="/github" target="_blank"
        >GitHub</a
      >
      <a class="btn preset-outlined-primary-500" href="/discord" target="_blank"
        >Discord</a
      >
    {/snippet}
  </AppBar>
  <div
    class="card border-surface-100-900 grid flex-auto w-full grid-cols-[auto_1fr] border-[1px] overflow-auto"
  >
    <Navigation.Rail>
      {#snippet header()}{/snippet}
      {#snippet tiles()}
        <Navigation.Tile id="0" label="Intro" href="/docs">
          Introduction
        </Navigation.Tile>
        <Navigation.Tile id="1" label="Basics" href="/docs/basics/installation">
          Installation
        </Navigation.Tile>
        <Navigation.Tile id="2" label="Basics" href="/docs/basics/config">
          Config UI
        </Navigation.Tile>

        <Navigation.Tile id="3" label="Basics" href='/docs/basics/ranks'>Ranks</Navigation.Tile>
        <Navigation.Tile id="4" label="Basics" href='/docs/basics/platform-settings'>Platforms</Navigation.Tile>
        <Navigation.Tile id="5" label="Advanced" href='/docs/advanced/ui-builder'>UI Builder</Navigation.Tile>
        <Navigation.Tile id="6" label="Advanced" href='/docs/advanced/sidebar-editor'>Sidebar</Navigation.Tile>
      {/snippet}
    </Navigation.Rail>

    <div class="flex items-center justify-center overflow-auto relative">
      {@render children()}
    </div>
  </div>
</div>
