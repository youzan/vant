
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
    </u-grid-layout-row>
</u-grid-layout>
```
