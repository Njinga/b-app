<template>
    <div id="examples" class="shadow-lg p-3 mb-5 rounded">
        <br />
        <h1>Generating Examples</h1>
        <p>
            If you need examples you can click the following button each time you will get a diffent example<br />
            but if you think you are good go try the exercises.
        </p>
        <br />
        <br />
        <button type="button" class="btn btn-primary">NEW EXAMPLE</button>
        <br />
        <br />
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitches">
            <label class="custom-control-label" for="customSwitches "> Answer</label>
        </div>
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitches">
            <label class="custom-control-label" for="customSwitches "> Working</label>
        </div>

        <br />
        <br />

    </div>
</template>

<script>

    export default {
        name: 'Exapmles'
    }

</script>

