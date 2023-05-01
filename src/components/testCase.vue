<template>
    <div>
        <h3>{{ title }}</h3>
        <p>{{ description}}</p>
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