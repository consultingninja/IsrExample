<script>
    export let data;

    $:user = data?.name.first + " " + data?.name.last;
</script>


{#if user}
    <h1>Hello {user}!</h1>
{:else}
    <h1>Error getting user</h1>
{/if}



<h1>Welcome to Consulting Ninja!</h1>
<h3>Incremental Static Regeneration on Vercel!</h3>
<p>Visit <a href="https://www.youtube.com/@ConsultingNinja/featured"><strong>@ConsultingNinja</strong></a> to see more great videos!</p>



<style>
    a{
        text-decoration: none;
        color:#1034e8;
        font-weight: 800;
        font-size: 1.2em;
    }
    a:hover{
        text-decoration: underline;
    }
</style>