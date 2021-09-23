<template>
    <div>
        <div :class="$style.side">
            <u-sidebar :class="$style.sidebar" size="small">
                <u-sidebar-group title="Cloud Design">
                    <u-sidebar-item to="/design/introduction">介绍</u-sidebar-item>
                    <u-sidebar-item to="/design/values">设计价值观</u-sidebar-item>
                    <u-sidebar-item to="/design/practice">设计实践</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="原则">
                    <u-sidebar-item to="/design/consistency">一致性和标准</u-sidebar-item>
                    <u-sidebar-item to="/design/pertinence">针对性</u-sidebar-item>
                    <u-sidebar-item to="/design/easy-using">易用性</u-sidebar-item>
                    <u-sidebar-item to="/design/feedback">适时反馈</u-sidebar-item>
                    <u-sidebar-item to="/design/flexibility">灵活与高效</u-sidebar-item>
                    <u-sidebar-item to="/design/simplicity">简约直接</u-sidebar-item>
                    <u-sidebar-item to="/design/prevention">预防错误</u-sidebar-item>
                    <u-sidebar-item to="/design/security">信息安全</u-sidebar-item>
                    <u-sidebar-item to="/design/interconnection">独立互连</u-sidebar-item>
                    <u-sidebar-item to="/design/instruction">帮助与说明</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </div>
        <div :class="$style.main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        const advanced = !!JSON.parse(localStorage.getItem('advanced'));

        return {
            advanced,
        };
    },
    methods: {
        onCheck($event) {
            localStorage.setItem('advanced', this.advanced);
        },
    },
};
</script>

<style module>
.side {
    position: fixed;
    width: var(--sidebar-width);
    top: var(--navbar-height);
    bottom: 0;
    overflow: hidden;
}

.sidebar {
    padding: 36px 0;
    height: 100%;
    overflow: auto;
    /* width: calc(--var(sidebar-width) + 8px); */
}

/* .sidebar > * {
    width: var(--sidebar-width);
} */

.main {
    margin-left: var(--sidebar-width);
    max-width: 1000px;
    padding: 50px;
    padding-top: 30px;
}
</style>
