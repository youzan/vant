### 拉伸图片，使图片填满元素

``` html
<van-image src="https://static-vusion.nos-eastchina1.126.net/h5-template/cat.jpeg" fit="fill"></van-image>
```

### 保持宽高缩放图片，使图片的长边能完全显示出来

``` html
<van-image src="https://static-vusion.nos-eastchina1.126.net/h5-template/cat.jpeg" fit="contain"></van-image>
```

### 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边

``` html
<van-image src="https://static-vusion.nos-eastchina1.126.net/h5-template/cat.jpeg" fit="cover"></van-image>
```

### 保持图片原有尺寸

``` html
<van-image src="https://static-vusion.nos-eastchina1.126.net/h5-template/cat.jpeg" fit="none"></van-image>
```

### 取 contain、none 中较小的

``` html
<van-image src="https://static-vusion.nos-eastchina1.126.net/h5-template/cat.jpeg" fit="scale-down"></van-image>
```
