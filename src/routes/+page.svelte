<script>
    export let data;
    $:user = data?.name.first + " " + data?.name.last;
</script>


{#if user}
    <h1>{user}</h1>
    <p>{data?.email}</p>
{:else}
    <p>Sorry, that user does not exist.</p>
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