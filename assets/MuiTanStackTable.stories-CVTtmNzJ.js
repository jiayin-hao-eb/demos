import{R as t,r as v}from"./iframe-B9FYqio8.js";import{M as f,C as w}from"./index-C4dDurK2.js";import{c as x,B as D}from"./Box-BcHeFJyd.js";import{I as E}from"./Select-Dxz5tekb.js";import{j as y}from"./jsx-runtime-8E0O18mK.js";import{E as M}from"./ExpandMore-BEv9GMCm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C-e26k9T.js";import"./index-wcX7yr8C.js";const N=x(y.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight"),R=x(y.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),C=x(y.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),r=[{id:1,firstName:"John",lastName:"Doe",age:30,email:"john@example.com",status:"active",department:"Engineering"},{id:2,firstName:"Jane",lastName:"Smith",age:25,email:"jane@example.com",status:"active",department:"Marketing"},{id:3,firstName:"Bob",lastName:"Johnson",age:35,email:"bob@example.com",status:"inactive",department:"Sales"},{id:4,firstName:"Alice",lastName:"Williams",age:28,email:"alice@example.com",status:"active",department:"Engineering"},{id:5,firstName:"Charlie",lastName:"Brown",age:32,email:"charlie@example.com",status:"active",department:"HR"},{id:6,firstName:"Diana",lastName:"Davis",age:27,email:"diana@example.com",status:"inactive",department:"Marketing"},{id:7,firstName:"Eve",lastName:"Miller",age:29,email:"eve@example.com",status:"active",department:"Sales"},{id:8,firstName:"Frank",lastName:"Wilson",age:31,email:"frank@example.com",status:"active",department:"Engineering"},{id:9,firstName:"Grace",lastName:"Moore",age:26,email:"grace@example.com",status:"inactive",department:"HR"},{id:10,firstName:"Henry",lastName:"Taylor",age:33,email:"henry@example.com",status:"active",department:"Marketing"}],P=[{id:1,name:"Engineering",manager:"John Smith",employees:50,budget:5e5,subDepartments:[{id:11,name:"Frontend",employees:20},{id:12,name:"Backend",employees:30}]},{id:2,name:"Marketing",manager:"Jane Doe",employees:30,budget:3e5,subDepartments:[{id:21,name:"Digital Marketing",employees:15},{id:22,name:"Content",employees:15}]},{id:3,name:"Sales",manager:"Bob Johnson",employees:40,budget:4e5,subDepartments:[{id:31,name:"Enterprise Sales",employees:25},{id:32,name:"SMB Sales",employees:15}]}],n=[{accessorKey:"firstName",header:()=>"First Name",cell:a=>a.getValue(),enableSorting:!0},{accessorKey:"lastName",header:()=>"Last Name",cell:a=>a.getValue(),enableSorting:!0},{accessorKey:"age",header:()=>"Age",cell:a=>a.getValue(),enableSorting:!0},{accessorKey:"email",header:()=>"Email",cell:a=>a.getValue()},{accessorKey:"department",header:()=>"Department",cell:a=>a.getValue(),enableSorting:!0},{accessorKey:"status",header:()=>"Status",cell:a=>t.createElement(w,{label:a.getValue(),color:a.getValue()==="active"?"success":"default",size:"small"}),enableSorting:!0},{id:"actions",header:()=>"Actions",cell:()=>t.createElement(D,null,t.createElement(E,{size:"small",color:"primary"},t.createElement(C,{fontSize:"small"})),t.createElement(E,{size:"small",color:"error"},t.createElement(R,{fontSize:"small"})))}],L={title:"Components/MuiTanStackTable",component:f,parameters:{layout:"padded"},tags:["autodocs"]},o={args:{data:r,columns:n}},i={args:{data:r,columns:n,enablePagination:!0,initialPageSize:5,pageSizeOptions:[5,10,25]}},l={args:{data:r,columns:n,enablePagination:!1}},c={args:{data:r,columns:n,enableSorting:!0,enablePagination:!1}},m={render:a=>{const[e,s]=v.useState({});return t.createElement("div",null,t.createElement("p",null,"Selected rows: ",Object.keys(e).length),t.createElement(f,{...a,enableRowSelection:!0,onRowSelectionChange:s}))},args:{data:r,columns:n}},d={render:a=>{const[e,s]=v.useState([]);return t.createElement("div",null,t.createElement("p",null,"Current sorting: ",JSON.stringify(e)),t.createElement(f,{...a,sorting:e,setSorting:s}))},args:{data:r,columns:n,enableSorting:!0}},g={render:()=>{const a=[{id:"expander",header:()=>null,cell:({row:e})=>e.getCanExpand()?t.createElement(E,{size:"small",onClick:e.getToggleExpandedHandler(),style:{cursor:"pointer"}},e.getIsExpanded()?t.createElement(M,null):t.createElement(N,null)):null,size:50},{accessorKey:"name",header:()=>"Department",cell:({row:e})=>{const s=e.depth*20;return t.createElement("div",{style:{paddingLeft:`${s}px`}},e.original.name)}},{accessorKey:"manager",header:()=>"Manager",cell:e=>e.getValue()||"—"},{accessorKey:"employees",header:()=>"Employees",cell:e=>e.getValue()},{accessorKey:"budget",header:()=>"Budget",cell:e=>{const s=e.getValue();return s?`$${s.toLocaleString()}`:"—"}}];return t.createElement(f,{data:P,columns:a,enableExpanding:!0,getSubRows:e=>e.subDepartments,getRowId:e=>String(e.id),enablePagination:!1})}},u={args:{data:r.slice(0,5),columns:n,enablePagination:!1,sx:{"& .MuiTableCell-root":{borderBottom:"2px solid #e0e0e0"},"& .MuiTableHead-root":{backgroundColor:"#f5f5f5"}}}},p={args:{data:r,columns:n,enablePagination:!1,maxHeight:400}},S={args:{data:Array.from({length:100},(a,e)=>({id:e,firstName:`First${e}`,lastName:`Last${e}`,age:20+e%50,email:`user${e}@example.com`,status:e%2===0?"active":"inactive",department:["Engineering","Marketing","Sales","HR"][e%4]})),columns:n,enablePagination:!0,initialPageSize:10}},h={args:{data:[],columns:n}},b={args:{data:[r[0]],columns:n,enablePagination:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns,
    enablePagination: true,
    initialPageSize: 5,
    pageSizeOptions: [5, 10, 25]
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns,
    enablePagination: false
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns,
    enableSorting: true,
    enablePagination: false
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedRows, setSelectedRows] = useState({});
    return <div>
                <p>Selected rows: {Object.keys(selectedRows).length}</p>
                <MuiTanStackTable {...args} enableRowSelection={true} onRowSelectionChange={setSelectedRows} />
            </div>;
  },
  args: {
    data: sampleData,
    columns
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [sorting, setSorting] = useState<SortingState>([]);
    return <div>
                <p>Current sorting: {JSON.stringify(sorting)}</p>
                <MuiTanStackTable {...args} sorting={sorting} setSorting={setSorting} />
            </div>;
  },
  args: {
    data: sampleData,
    columns,
    enableSorting: true
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const departmentColumns: ColumnDef<Department>[] = [{
      id: 'expander',
      header: () => null,
      cell: ({
        row
      }) => {
        return row.getCanExpand() ? <IconButton size="small" onClick={row.getToggleExpandedHandler()} style={{
          cursor: 'pointer'
        }}>
                            {row.getIsExpanded() ? <ExpandMore /> : <ChevronRight />}
                        </IconButton> : null;
      },
      size: 50
    }, {
      accessorKey: 'name',
      header: () => 'Department',
      cell: ({
        row
      }) => {
        const indent = row.depth * 20;
        return <div style={{
          paddingLeft: \`\${indent}px\`
        }}>
                            {row.original.name}
                        </div>;
      }
    }, {
      accessorKey: 'manager',
      header: () => 'Manager',
      cell: info => info.getValue() || '—'
    }, {
      accessorKey: 'employees',
      header: () => 'Employees',
      cell: info => info.getValue()
    }, {
      accessorKey: 'budget',
      header: () => 'Budget',
      cell: info => {
        const value = info.getValue() as number;
        return value ? \`$\${value.toLocaleString()}\` : '—';
      }
    }];
    return <MuiTanStackTable data={hierarchicalData} columns={departmentColumns} enableExpanding={true} getSubRows={row => row.subDepartments} getRowId={row => String(row.id)} enablePagination={false} />;
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData.slice(0, 5),
    columns,
    enablePagination: false,
    sx: {
      '& .MuiTableCell-root': {
        borderBottom: '2px solid #e0e0e0'
      },
      '& .MuiTableHead-root': {
        backgroundColor: '#f5f5f5'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns,
    enablePagination: false,
    maxHeight: 400
  }
}`,...p.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    data: Array.from({
      length: 100
    }, (_, i) => ({
      id: i,
      firstName: \`First\${i}\`,
      lastName: \`Last\${i}\`,
      age: 20 + i % 50,
      email: \`user\${i}@example.com\`,
      status: i % 2 === 0 ? 'active' : 'inactive',
      department: ['Engineering', 'Marketing', 'Sales', 'HR'][i % 4]
    })) as Person[],
    columns,
    enablePagination: true,
    initialPageSize: 10
  }
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    columns
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    data: [sampleData[0]],
    columns,
    enablePagination: false
  }
}`,...b.parameters?.docs?.source}}};const j=["Basic","WithPagination","WithoutPagination","WithSorting","WithRowSelection","WithExternalSorting","WithExpandingRows","CustomStyling","WithMaxHeight","LargeDataset","EmptyState","SingleRow"];export{o as Basic,u as CustomStyling,h as EmptyState,S as LargeDataset,b as SingleRow,g as WithExpandingRows,d as WithExternalSorting,p as WithMaxHeight,i as WithPagination,m as WithRowSelection,c as WithSorting,l as WithoutPagination,j as __namedExportsOrder,L as default};
