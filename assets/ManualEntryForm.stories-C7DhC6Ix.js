import{M as i}from"./index-FYwziM2e.js";import"./iframe-B9FYqio8.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-BcHeFJyd.js";import"./jsx-runtime-8E0O18mK.js";import"./Button-Bdue7Ofb.js";import"./Select-Dxz5tekb.js";import"./index-C-e26k9T.js";import"./index-wcX7yr8C.js";import"./ExpandMore-BEv9GMCm.js";import"./Link-DbmlrhsO.js";const N={title:"Pages/ItineraryManagement/AddItineraries/ManualEntryForm",component:i,parameters:{layout:"fullscreen"}},e={args:{onCancel:()=>console.log("Cancel clicked"),onSuccess:()=>console.log("Form submitted successfully")}},n={args:{uploadFileName:"corporate-travel-2024.csv",onCancel:()=>console.log("Cancel clicked"),onSuccess:()=>console.log("Form submitted successfully")}},a={args:{editingItinerary:{id:"ITN-001",itineraryName:"San Francisco Business Trip",itineraryId:"SF-2024-Q4",pnr:"ABC123",status:"Confirmed",additionalInfo:"Annual tech conference",source:"manual",travelers:[{firstName:"John",lastName:"Doe",email:"john.doe@company.com",phone:"+1-555-0100",employeeId:"EMP001",additionalInfo:"VP of Engineering"},{firstName:"Jane",lastName:"Smith",email:"jane.smith@company.com",phone:"+1-555-0101",employeeId:"EMP002"}],segments:[{type:"Air",airline:"United Airlines",airlineCode:"UA",flightNumber:"1234",origin:"LAX",destination:"SFO",departure:"2024-12-01T08:00:00Z",arrival:"2024-12-01T09:30:00Z",departureTime:"08:00",arrivalTime:"09:30"},{type:"Hotel",hotelName:"Marriott Downtown",destination:"San Francisco, CA",checkInDate:"2024-12-01",checkOutDate:"2024-12-03",confirmationNumber:"HTL-9876"},{type:"Car",rentalCompany:"Enterprise",pickupLocation:"SFO Airport",dropoffLocation:"SFO Airport",pickupDate:"2024-12-01",dropoffDate:"2024-12-03",confirmationNumber:"CAR-5432"}]},onCancel:()=>console.log("Cancel clicked"),onSuccess:()=>console.log("Form updated successfully")}},r={args:{editingItinerary:{id:"ITN-002",itineraryName:"Quick Trip",source:"manual",travelers:[{firstName:"Alice",lastName:"Johnson",email:"alice.j@company.com"}],segments:[{type:"Air",origin:"JFK",destination:"BOS"}]},onCancel:()=>console.log("Cancel clicked"),onSuccess:()=>console.log("Form submitted successfully")}},o={args:{editingItinerary:{id:"ITN-003",itineraryName:"European Conference Tour",itineraryId:"EU-2024-CONF",pnr:"XYZ789",status:"Pending",additionalInfo:"Multi-city conference attendance with hotel stays",source:"manual",travelers:[{firstName:"Robert",lastName:"Williams",email:"robert.w@company.com",phone:"+1-555-0200",employeeId:"EMP003",additionalInfo:"Senior Developer"},{firstName:"Sarah",lastName:"Brown",email:"sarah.b@company.com",phone:"+1-555-0201",employeeId:"EMP004",additionalInfo:"Product Manager"},{firstName:"Michael",lastName:"Davis",email:"michael.d@company.com",phone:"+1-555-0202",employeeId:"EMP005"}],segments:[{type:"Air",airline:"Lufthansa",airlineCode:"LH",flightNumber:"400",origin:"JFK",destination:"FRA",departure:"2024-12-05T20:00:00Z",arrival:"2024-12-06T09:00:00Z",departureTime:"20:00",arrivalTime:"09:00",confirmationNumber:"AIR-1111"},{type:"Hotel",hotelName:"Frankfurt Hilton",destination:"Frankfurt, Germany",checkInDate:"2024-12-06",checkOutDate:"2024-12-08",confirmationNumber:"HTL-2222"},{type:"Train",trainCarrier:"Deutsche Bahn",trainNumber:"ICE 123",origin:"Frankfurt Hbf",destination:"Berlin Hbf",departure:"2024-12-08T10:00:00Z",arrival:"2024-12-08T14:00:00Z",confirmationNumber:"TRN-3333"},{type:"Hotel",hotelName:"Berlin Marriott",destination:"Berlin, Germany",checkInDate:"2024-12-08",checkOutDate:"2024-12-11",confirmationNumber:"HTL-4444"},{type:"Air",airline:"Lufthansa",airlineCode:"LH",flightNumber:"401",origin:"TXL",destination:"JFK",departure:"2024-12-11T15:00:00Z",arrival:"2024-12-11T18:00:00Z",departureTime:"15:00",arrivalTime:"18:00",confirmationNumber:"AIR-5555"}]},onCancel:()=>console.log("Cancel clicked"),onSuccess:()=>console.log("Form submitted successfully")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    onCancel: () => console.log('Cancel clicked'),
    onSuccess: () => console.log('Form submitted successfully')
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    uploadFileName: 'corporate-travel-2024.csv',
    onCancel: () => console.log('Cancel clicked'),
    onSuccess: () => console.log('Form submitted successfully')
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    editingItinerary: {
      id: 'ITN-001',
      itineraryName: 'San Francisco Business Trip',
      itineraryId: 'SF-2024-Q4',
      pnr: 'ABC123',
      status: 'Confirmed',
      additionalInfo: 'Annual tech conference',
      source: 'manual',
      travelers: [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@company.com',
        phone: '+1-555-0100',
        employeeId: 'EMP001',
        additionalInfo: 'VP of Engineering'
      }, {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@company.com',
        phone: '+1-555-0101',
        employeeId: 'EMP002'
      }],
      segments: [{
        type: 'Air',
        airline: 'United Airlines',
        airlineCode: 'UA',
        flightNumber: '1234',
        origin: 'LAX',
        destination: 'SFO',
        departure: '2024-12-01T08:00:00Z',
        arrival: '2024-12-01T09:30:00Z',
        departureTime: '08:00',
        arrivalTime: '09:30'
      }, {
        type: 'Hotel',
        hotelName: 'Marriott Downtown',
        destination: 'San Francisco, CA',
        checkInDate: '2024-12-01',
        checkOutDate: '2024-12-03',
        confirmationNumber: 'HTL-9876'
      }, {
        type: 'Car',
        rentalCompany: 'Enterprise',
        pickupLocation: 'SFO Airport',
        dropoffLocation: 'SFO Airport',
        pickupDate: '2024-12-01',
        dropoffDate: '2024-12-03',
        confirmationNumber: 'CAR-5432'
      }]
    },
    onCancel: () => console.log('Cancel clicked'),
    onSuccess: () => console.log('Form updated successfully')
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    editingItinerary: {
      id: 'ITN-002',
      itineraryName: 'Quick Trip',
      source: 'manual',
      travelers: [{
        firstName: 'Alice',
        lastName: 'Johnson',
        email: 'alice.j@company.com'
      }],
      segments: [{
        type: 'Air',
        origin: 'JFK',
        destination: 'BOS'
      }]
    },
    onCancel: () => console.log('Cancel clicked'),
    onSuccess: () => console.log('Form submitted successfully')
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    editingItinerary: {
      id: 'ITN-003',
      itineraryName: 'European Conference Tour',
      itineraryId: 'EU-2024-CONF',
      pnr: 'XYZ789',
      status: 'Pending',
      additionalInfo: 'Multi-city conference attendance with hotel stays',
      source: 'manual',
      travelers: [{
        firstName: 'Robert',
        lastName: 'Williams',
        email: 'robert.w@company.com',
        phone: '+1-555-0200',
        employeeId: 'EMP003',
        additionalInfo: 'Senior Developer'
      }, {
        firstName: 'Sarah',
        lastName: 'Brown',
        email: 'sarah.b@company.com',
        phone: '+1-555-0201',
        employeeId: 'EMP004',
        additionalInfo: 'Product Manager'
      }, {
        firstName: 'Michael',
        lastName: 'Davis',
        email: 'michael.d@company.com',
        phone: '+1-555-0202',
        employeeId: 'EMP005'
      }],
      segments: [{
        type: 'Air',
        airline: 'Lufthansa',
        airlineCode: 'LH',
        flightNumber: '400',
        origin: 'JFK',
        destination: 'FRA',
        departure: '2024-12-05T20:00:00Z',
        arrival: '2024-12-06T09:00:00Z',
        departureTime: '20:00',
        arrivalTime: '09:00',
        confirmationNumber: 'AIR-1111'
      }, {
        type: 'Hotel',
        hotelName: 'Frankfurt Hilton',
        destination: 'Frankfurt, Germany',
        checkInDate: '2024-12-06',
        checkOutDate: '2024-12-08',
        confirmationNumber: 'HTL-2222'
      }, {
        type: 'Train',
        trainCarrier: 'Deutsche Bahn',
        trainNumber: 'ICE 123',
        origin: 'Frankfurt Hbf',
        destination: 'Berlin Hbf',
        departure: '2024-12-08T10:00:00Z',
        arrival: '2024-12-08T14:00:00Z',
        confirmationNumber: 'TRN-3333'
      }, {
        type: 'Hotel',
        hotelName: 'Berlin Marriott',
        destination: 'Berlin, Germany',
        checkInDate: '2024-12-08',
        checkOutDate: '2024-12-11',
        confirmationNumber: 'HTL-4444'
      }, {
        type: 'Air',
        airline: 'Lufthansa',
        airlineCode: 'LH',
        flightNumber: '401',
        origin: 'TXL',
        destination: 'JFK',
        departure: '2024-12-11T15:00:00Z',
        arrival: '2024-12-11T18:00:00Z',
        departureTime: '15:00',
        arrivalTime: '18:00',
        confirmationNumber: 'AIR-5555'
      }]
    },
    onCancel: () => console.log('Cancel clicked'),
    onSuccess: () => console.log('Form submitted successfully')
  }
}`,...o.parameters?.docs?.source}}};const h=["Default","WithUploadFileName","EditMode","MinimalData","ComplexItinerary"];export{o as ComplexItinerary,e as Default,a as EditMode,r as MinimalData,n as WithUploadFileName,h as __namedExportsOrder,N as default};
