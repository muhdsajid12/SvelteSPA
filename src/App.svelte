<script>
  import Router from "svelte-spa-router";
  import {
    link,
    push,
    pop,
    replace,
    location,
    querystring,
  } from "svelte-spa-router";
  import { onMount, afterUpdate } from 'svelte';
  import active from "svelte-spa-router/active";
  import Sidebar from "./Sidebar.svelte";
  import SidebarPOC from "./SidebarPOC.svelte"; // use modernizer
  import {LogIn, GetStatusAuth} from './script/auth'

  import Home from "./Home.svelte";
  import Page from "./Page.svelte";
  import NotFound from "./NotFound.svelte";
  import Command from "./components/Command.svelte";
  import Login from "./components/Login.svelte";

  let currentLogin = false;

  // routes
  const routes = {
    "/": Home,
    "/page": Page,
    "/command": Command,
    "*": NotFound,
  };

</script>

{#if !currentLogin}
 <Login bind:currentLogin />
{:else}
  <Sidebar>
    <span slot="sidebar">
      <a
        href="/home"
        class="list-group-item list-group-item-action bg-light"
        use:link
        use:active>Home</a
      >
      <a
        href="/page"
        class="list-group-item list-group-item-action bg-light"
        use:link
        use:active>Example Page</a
      >
      <a
        href="/command"
        class="list-group-item list-group-item-action bg-light"
        use:link
        use:active>WhatsApp</a
      >
    </span>
    <span slot="content">
      <Router {routes} />
    </span>
  </Sidebar>
{/if}

<style>
  /* Style for "active" links; need to mark this :global because the router adds the class directly */
  :global(.list-group-item.active) {
    font-weight: bold;
    color: black;
  }
</style>
