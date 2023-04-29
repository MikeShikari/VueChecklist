<template>
    <div>
        <h3>{{ title }}</h3>
    </div>
</template>


<script>
export default {
    name: 'testCase',
    props: {
        title: {
            type: String
        },
        description: {
            type: String
        }
    }

}
</script>

<style></style>