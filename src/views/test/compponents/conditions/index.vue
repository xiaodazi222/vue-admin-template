<template>
  <div class="conditions-wrapper">
      <div class="conditions-wrapper-item"><span>昵称</span><el-input placeholder="昵称"></el-input></div>

      <div class="conditions-wrapper-item">
          <!-- <el-form-item label="所属学科"> -->
            <!-- <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select> -->
          <!-- </el-form-item> -->
          <span>所属学科</span><el-select v-model="form.region" placeholder="请选择">
                <el-option label="语文" value="shanghai"></el-option>
                <el-option label="数学" value="beijing"></el-option>
                <el-option label="英语" value="beijing"></el-option>
            </el-select>
      </div>
      
      <div class="conditions-wrapper-item"><span>职位</span><el-input placeholder="请填写您的昵称"></el-input></div>
      <div class="conditions-wrapper-item" id="setYear"><span>工作年限</span><el-input placeholder="起" ></el-input><el-input  placeholder="止"></el-input></div>
      <div class="conditions-wrapper-item"><span>手机号</span><el-input placeholder="手机号"></el-input></div>
      <div class="myblock">
          <el-button type="primary" icon="el-icon-search" size="medium">搜索</el-button>
          <el-button type="info">重置<i class="el-icon-refresh-right"></i></el-button>
      </div>
      
    
  </div>
</template>

<script>
export default {
     data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
}
</script>

<style lang="scss" scoped>


.conditions-wrapper{
    display: flex;
    align-items: center;
    width: 100%;
    &-item{
        border: 1px solid #999;
        border-radius: 4px;
        display: flex;
        // width: 10%;
        // flex-direction: row;
        align-items: center;
        // justify-content: center;
        // text-align: center;
        margin-right: 20px;
        span{
            display: inline-block;
            font-size: 14px;
            // justify-content: center;
            text-align: center;
            line-height: 16px;
            
        }

        .el-input{
            display: inline-block;

        }
      
    }

    #setYear{
        .el-input{
            width: 80px;
        }
    }
    
}


</style>