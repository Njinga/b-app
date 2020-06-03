<template>
    <b-navbar toggleable type="light" variant="success">
        <b-navbar-brand to="/">Home</b-navbar-brand>

        <b-navbar-toggle target="navbar-toggle-collapse">
            <template v-slot:default="{ expanded }">
                <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                <b-icon v-else icon="chevron-bar-down"></b-icon>
            </template>
        </b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/notes">Notes</b-nav-item>
                <b-nav-item to="/examples">Examples</b-nav-item>
                <b-nav-item to="/exercises">Exercises</b-nav-item>
                <b-nav-item to="/about">About Us</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "Navbar"
    };
</script>

<style scoped>

</style>