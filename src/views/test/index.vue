<template>
  <div class="test-wrapper">
    <list-layout>
        <template slot="header">
            <div>
                <conditons/>
            </div>
        </template>

        <template slot="content">
            <al-table 
            :column="formData.column" 
            :data="formData.list" 
            :pagination="true">
            </al-table>
        </template>
    </list-layout>
    <div> 
        <span>
            显示第1条到第3条的数据，总共{{len}}条数据
        </span>  
    </div>

  </div>
</template>

<script>
import {getTestList} from '@/api/test.js'

import ListLayout from '@/components/ListLayout/index.vue'
import AlTable from '@/components/lb-table/lb-table.vue'
import Conditons from './compponents/conditions/index.vue'

export default {
    components:{
        ListLayout,
        AlTable,
        Conditons
    }, 
    data() {
        return {
            len:{},
            formData: {
                column:[
                    {
                        prop:'nick',
                        label:'昵称'
                    },
                    {
                        prop:'phone',
                        label:'手机号'
                    },
                    {
                        prop:'name',
                        label:'真实姓名'
                    },
                    {
                        prop:'subject',
                        label:'所属学科'
                    },
                    {
                        prop:'job',
                        label:'职位'
                    },
                    {
                        prop:'year',
                        label:'工作年限'
                    },
                    {
                        prop:'updateTime',
                        label:'录入时间'
                    },
                    {
                        prop:'actions',
                        label:'操作',
                        render(_,scope) {
                            return (
                                <div >
                                    
                                    <el-tag type="success" effect="dark">查看</el-tag>
                                    <el-tag type="primary" effect="dark">编辑</el-tag>
                                    <el-tag type="danger" effect="dark">删除</el-tag>

                                </div>
                                )
                        },
                    },
                    // <span>查看</span>|<span>编辑</span>|<span>删除</span>
                    // <el-button type="success" size="mini" style="width:20%">查看</el-button>
                                // <el-button type="primary" size="mini">编辑</el-button>
                                // <el-button type="danger" size="mini">删除</el-button>

                ],
                list:[],
               
            }
        }
    },
    
    created() {
        getTestList().then((res)=>{
            const {code,data} = res;
            if (Number(code) === 20000) {
                const {items , total} = data;
                this.formData.list = items;
                this.len = total
            }
            console.log('test',res)
        })
    },
}
</script>

<style lang="scss" scoped>
span{
    display: block;
    margin-left: 20px;
    font-size: 14px;
}

</style>