<script lang="ts">
    import ModuleCard from "../lib/ModuleCard.svelte";
    import { blitzRoutes } from "./blitzRoutes";
    import { matchRoutes } from "./matchRoutes";
</script>
<div class="modulesWrapper">
    <div class="carouselWrapper">
        <p>Welcome to <br><span><h1 style="color: #9381FF">Ari Modules</h1></span></p>
        <h3>Matching</h3>
        <div class="carousel">
            {#each matchRoutes as {title, link, imgsrc}}
                <ModuleCard title="{title}" time=" " link="{link}" imgsrc="{imgsrc}"/>
            {/each}
        </div>
        <h3>Blitz Challenge</h3>
        <div class="carousel">
            {#each blitzRoutes as {title, time, link, imgsrc}}
                <ModuleCard title="{title}" time="{time}s" link="{link}" imgsrc="{imgsrc}"/>
            {/each}
        </div>
        <h3>Coming Soon</h3>
        <div class="carousel">
            <ModuleCard title="Fractions" time="15s" link="#" imgsrc="./q.webp"/>
            <ModuleCard title="Exponents" time="15s" link="#" imgsrc="./q.webp"/>
            <ModuleCard title="Logarithm" time="15s" link="#" imgsrc="./q.webp"/>
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
        padding-left: 15px ;
        overflow-y: hidden;
    }
    div.carousel::-webkit-scrollbar {
        display: none;
    }
</style>