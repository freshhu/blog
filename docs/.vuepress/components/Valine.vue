<!--
 * @Author: jiangnan
 * @Email: hujiangnan@hatech.com.cn
 * @Date: 2021-11-07 21:32:32
 * @LastEditors: jiangnan
 * @LastEditTime: 2021-11-09 11:23:22
 * @Describle: 描述
-->
<template>
  <section class="read_num">
    <div>
      <!-- id 将作为查询条件 -->
      <span class="leancloud-visitors"
            data-flag-title="Your Article Title">
        <em class="post-meta-item-text">访问量： </em>
        <i class="leancloud-visitors-count"></i>
      </span>
    </div>
    <!-- <h3>
      <a href="javascript:;"></a>
      评 论：
    </h3>
    <div id="vcomments"></div> -->
  </section>
</template>
 
<script>
export default {
  name: 'Valine',
  mounted() {
    // require window
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      document.getElementsByClassName('leancloud-visitors')[0].id
        = window.location.pathname
      this.window = window
      window.AV = require('leancloud-storage')
    }
 
    new Valine({
      el: '#vcomments',
      appId: 'P1zBRAo1U271H7HJLjo1z72Nd-gzGzoHsz',// your appId
      appKey: '81eVX45J8i5VFTlkejnfBMuhh', // your appKey
      notify: false,
      verify: false,
      path: window.location.pathname,
      visitor: true,
      avatar: 'mm',
      placeholder: 'write here'
    });
  },
}
</script>

<style scoped lang='stylus'>
.read_num 
    margin-bottom: 16px;
    border-bottom: 2px solid #eaecef;
    padding-bottom: 10px;
    text-indent: 0em;
</style>