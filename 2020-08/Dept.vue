<template>
  <div>
    <h1>This is Vue page</h1>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="deptno" label="部门编号" width="180"></el-table-column>
      <el-table-column prop="dname" label="部门名称" width="180"></el-table-column>
      <el-table-column prop="loc" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
// http://localhost:8081/dept/info/10
// vue ajax : axios
// npm install axios --save
import axios from "axios";
const url = "http://localhost:8081/dept/all";
export default {
  data() {
    return { tableData: [] };
  },
  mounted() {
    axios
      .get(url)
      .then((response) => (this.tableData = response.data))
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style>
</style>