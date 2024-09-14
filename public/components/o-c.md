<script>
export default {
  name: "toolbar-content"
}
</script>

<template>
    <pv-toolbar class="fixed top-0 left-0 w-full bg-primary p-3">
        <template #start>
        </template #center>
            <div class="flex m-2 justify-content-center align-items-center">
                <p>Title</p>
            </div>
        </template>
        <template #end>
        </template>
    </pv-toolbar>
</template>

<style scoped>

</style>