
### 分组

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>默认，无折叠功能</p>
            <m-parent>
                <m-group title="洗具">
                    <m-child>毛巾</m-child>
                    <m-child>牙刷</m-child>
                </m-group>
                <m-group title="杯具">
                    <m-child>牙缸</m-child>
                    <m-child>水杯</m-child>
                </m-group>
                <m-group title="餐具">
                    <m-child>筷子</m-child>
                    <m-child>碗</m-child>
                </m-group>
            </m-parent>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>开启折叠功能</p>
            <m-parent collapsible>
                <m-group title="洗具">
                    <m-child>毛巾</m-child>
                    <m-child>牙刷</m-child>
                </m-group>
                <m-group title="杯具" expanded disabled>
                    <m-child>牙缸</m-child>
                    <m-child>水杯</m-child>
                </m-group>
                <m-group title="餐具" :collapsible="false">
                    <m-child>筷子</m-child>
                    <m-child>碗</m-child>
                </m-group>
            </m-parent>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>手风琴模式</p>
            <m-parent collapsible accordion value="cup">
                <m-group title="洗具">
                    <m-child value="towel">毛巾</m-child>
                    <m-child value="toothbrush">牙刷</m-child>
                </m-group>
                <m-group title="杯具">
                    <m-child value="toothcup">牙缸</m-child>
                    <m-child value="cup">水杯</m-child>
                </m-group>
                <m-group title="餐具">
                    <m-child value="chopsticks">筷子</m-child>
                    <m-child value="bowl">碗</m-child>
                </m-group>
            </m-parent>
        </u-grid-layout-column>
    </u-grid-layout-row>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>触发方式：整行点击均可触发（默认）</p>
            <m-parent collapsible expand-trigger="click">
                <m-group title="洗具">
                    <m-child>毛巾</m-child>
                    <m-child>牙刷</m-child>
                </m-group>
                <m-group title="杯具">
                    <m-child>牙缸</m-child>
                    <m-child>水杯</m-child>
                </m-group>
            </m-parent>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>触发方式：仅点击小箭头时触发</p>
            <m-parent collapsible expand-trigger="click-expander">
                <m-group title="洗具">
                    <m-child>毛巾</m-child>
                    <m-child>牙刷</m-child>
                </m-group>
                <m-group title="杯具">
                    <m-child>牙缸</m-child>
                    <m-child>水杯</m-child>
                </m-group>
            </m-parent>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```
