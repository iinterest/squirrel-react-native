# 条栏 Bar

条栏 Bar，用于告知用户其所在位置的情境信息，以及帮助用户浏览或执行操作的控件，包含导航栏、工具栏。

``` javascript
<Bar
	title="Squirrel UI"
	type="toolbar"
/>
```

## 属性 Props

* **theme** \<srting\> 主题；
* **primary** \<srting\> 主色调；
* **divider**: \<bool\> 是否显示分割线；
* **items**: \<array\> 栏条内显示的元素；
* **title**: \<srting\> 标题文案；
* **layoutGravity** \<srting\> 用于来更改布局的排版，可选值包括：
	* **left**
	* **center**
* **type**: \<sstring\> 属性决定 Bar 的显示类型，可选值包括：
	* **toolbar** 工具栏，是操作页面或视图中对象的控件，通常包含当前情境下最常用的指令；
	* **nav** 是用于显示底部导航（Bottom navigation）。


## 示例 Example

### items

Bar 中显示的 `items` 属性通常都是被赋予各种功能的按钮，这里可以使用 [IconButton](https://github.com/iinterest/squirrel-react-native/docs/IconButton "IconButton") 组件来创建按钮：

``` javascript
const MenuButton = 
    <IconButton
        key="MenuButton"
        onPressHandle={this.onButtonClicked.bind(this)}
    >
        <Icon name="menu" size={24} />
    </IconButton>;
    
const notificationButton =
    <IconButton
        key="notificationButton"
        onPressHandle={this.onButtonClicked.bind(this)}
    >
        <Icon name='notifications-none' size={24} />
    </IconButton>;

```

### toolbar

<img src="https://raw.githubusercontent.com/iinterest/squirrel-react-native/master/images/bar-toolbar.png" width="320" />

``` javascript
<Bar
	title="Squirrel Bar"
	type="toolbar"
	items={[MenuButton, notificationButton, MoreButton]}
/>
```

### layoutGravity

<img src="https://raw.githubusercontent.com/iinterest/squirrel-react-native/master/images/bar-toolbar-layoutGravity.png" width="320" />

当 `type="toolbar"` 时，可以使用该属性设置排版： 

``` javascript
<Bar
    title="首页"
    type="toolbar"
    layoutGravity="center"
    items={[MenuButton, SearchButton]}
/>
```
注意：当 `layoutGravity="center"` 时，栏条只会显示 `items` 中的前两个元素。


### nav

<img src="https://raw.githubusercontent.com/iinterest/squirrel-react-native/master/images/bar-nav.png" width="320" />


``` javascript
<Bar
    type="nav"
    items={[NavButton1, NavButton2, NavButton3, NavButton4, NavButton5]}
/>

```