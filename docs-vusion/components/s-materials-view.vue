<template>
<div :class="$style.root">
    <div :class="$style.side" v-if="!message.singleton">
        <u-sidebar :class="$style.sidebar" size="small">
            <template v-for="group in groups">
                <template v-if="!group.name">
                    <u-sidebar-item v-for="material in group.children" :key="material.name"
                                    :href="material.href" :to="material.to ? material.to : `/${type}/` + material.name" :target="material.target">
                        {{ camelName ? material.CamelName : material.name }}
                        <u-label v-if="material.deprecated" style="background: #6c80a1;">废弃</u-label>
                        <small v-else :class="$style.alias">{{ material.alias }}</small>
                        <u-label v-if="material.newest" color="primary">NEW</u-label>
                    </u-sidebar-item>
                </template>
                <u-sidebar-group v-else :key="group.name" :title="group.name">
                    <u-sidebar-item v-for="material in group.children" :key="material.name"
                                    :href="material.href" :to="material.to ? material.to : `/${type}/` + material.name" :target="material.target">
                        {{ camelName ? material.CamelName : material.name }}
                        <u-label v-if="material.deprecated" style="background: #6c80a1;">废弃</u-label>
                        <small v-else :class="$style.alias">{{ material.alias }}</small>
                        &nbsp;<u-label v-if="material.newest" color="primary">NEW</u-label>
                    </u-sidebar-item>
                </u-sidebar-group>
            </template>
        </u-sidebar>
    </div>
    <div :class="$style.main">
        <div :class="$style.content">
            <router-view></router-view>
        </div>
    </div>
</div>
</template>

<script>
import message from '../message';
export default {
    name: 's-materials-view',
    props: {
        type: { type: String, default: 'components' },
        groups: Array,
        camelName: { type: Boolean, default: true },
        sidebarSize: String,
    },
    data() {
        return {
            message,
        };
    },
};
</script>

<style module>
.side {
    position: fixed;
    width: 210px;
    top: var(--navbar-height);
    bottom: 0;
    overflow: hidden;
}

:global(.singleton) .side {
    display: none;
}

.sidebar[class] {
    padding: 36px 0;
}

.alias {
    font-size: 90%;
}

.main {
    margin-left: 240px;
    margin-right: 240px;
}

:global(.singleton) .main {
    margin: 0;
}

.content {
    padding: 30px 50px 50px;
}
</style>
