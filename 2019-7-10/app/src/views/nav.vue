<template>
    <div>
        <mu-container>
            <mu-tabs :value.sync="active">
                <mu-tab>TAB ITEM 1</mu-tab>
                <mu-tab>TAB ITEM 2</mu-tab>
                <mu-tab>TAB ITEM 3</mu-tab>
            </mu-tabs>
            <!-- <div class="demo-text" v-if="active === 0">
                    <p>“……是的，我承认从很早以前我都害怕死亡，在医院里被人研究的时候，以前做出布局的时候，其实我很怕死的，因为除了死以外，我没有值得珍惜的东西，很奇怪是吧？恰好是这样我真的很怕死，因为我想要有值得珍惜的东西之后，死亡之后才会不寂寞，我才能够安然的面对死亡……”</p>
                </div>
                <div class="demo-text" v-if="active === 1">
                    <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
                    <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
                    <p>“那么就去地狱找到你，我绝对不逃！”</p>
                    <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
                </div>
                <div class="demo-text" v-if="active === 2">
                    <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
                    <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
                    <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
                    <p>“也许吧，未来……给你了。”</p>
                </div> -->
        </mu-container>
    </div>
</template>

<script>
export default {
    data () {
        return {
        active: 0
        };
    }
}
</script>

<style scoped>
.demo-text {
  padding: 16px;
  background: #fff;
  
}
.demo-text p {
    margin: 8px 0;
}
.container{
    padding:0;
}
</style>

