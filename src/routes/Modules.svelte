<script lang="ts">
    import ModuleCard from "../lib/ModuleCard.svelte";
    import { routeData } from "./routeData";
</script>
<div class="modulesWrapper">
    <div class="carouselWrapper">
        <p>Welcome to <br><span><h1 style="color: #9381FF">Ari Modules</h1></span></p>
        <h3>Blitz Challenge</h3>
        <div class="carousel">
            {#each routeData as {title, time, link}}
            <ModuleCard title="{title}" time="{time}s" link="{link}"/>
            {/each}
        </div>
        <h3>Coming Soon</h3>
        <div class="carousel">
            <ModuleCard title="Fractions" time="15s" link="#"/>
            <ModuleCard title="Exponents" time="15s" link="#"/>
            <ModuleCard title="Logarithm" time="15s" link="#"/>
        </div>
    </div>
</div>
<style>
    div.modulesWrapper {
        padding: 30px;
    }
    div.carousel{
        display: flex;
        flex-direction: row;
        overflow-y: auto;
        padding-bottom: 30px;
    }
    div.carousel::-webkit-scrollbar {
        display: none;
    }
</style>