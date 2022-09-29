
代码包，读懂代码，不懂就问：
src  java代码
	-- servlet servlet类存放的包（定义servlet有三种方式），记得在web.xml中进行配置
	-- vo  *Info.java info这类对象存放路径，类的私有属性对照数据库字段
	-- service 接口
		-- impl 实现类 业务层 现阶段业务直接调用dao层即可
	-- dao 接口
		-- impl 实现类 持久层 连接数据库（注意数据库的uri 要改成你自己的数据库连接地址哈）

web  web相关文件
	-- WEB-INF
		-- web.xml web配置文件，servlet就在这里配置
	-- *.jsp 我们暂时把jsp文件都直接放web根目录下

pom.xml maven的配置文件，
先在window》preferences里搜索maven，看install里是否配置成了我们本机我给你们传的解压的那个maven，
然后 dynamic web project 转成maven项目的方式是在项目上点右键，》configure》convert to maven project 
转成maven项目之后系统会更新很多包、插件什么的，等待即可。
找maven中的包去这个网站，例如我们找mysql的连接包：https://mvnrepository.com/artifact/mysql/mysql-connector-java


作业：
咱们不是带着大家做了DeptInfo的整个业务流程了吗，大家再自己做一下emp的整个流程，具体的步骤如下：

1. 先在edu0425.spring.vo 包下创建 EmpInfo， 对照数据库中的emp表，注意hiredate的类型为Date（引包是java.util.Date）
2. DAO层创建 EmpDAO 接口，里面三个方法： 
List<EmpInfo> getEmpList(); 
EmpInfo getEmpById(Integer empno);
Integer getEmpCount();

3. 创建EmpDAOImpl实现类，注意包路径， 上一个接口是在edu0425.spring.dao ， 这个实现类是在edu0425.spring.dao.impl

4. 业务层创建EmpService， 同样的创建EmpServiceImpl实现类，直接调用DAO层即可。

5. 创建EmpServlet , 记得在web.xml 里配置这个servlet， 拦截路径就写 /demo/emp.html 即可

6. 创建emp.jsp ， 制作表格，记得在jsp页面顶上引入jstl标签，参考dept.jsp即可

实现以上功能之后，需要分别把 Integer getEmpCount();和 Integer getDeptCount(); 这两个方法也实现了，这两个是查询数据数量的 用 select * from 表名即可
然后在对应的两个jsp表格的上放，把这两个数据的数量显示出来即可。

然后另外付了两个编程练习题，arrow（上课做过）和forest（挑战一下）