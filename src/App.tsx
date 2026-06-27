// App.tsx
import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { Modal } from './components/Modal/index';
import { Input } from './components/Input/index';
import { Switch } from './components/Switch/index';

import {
  SettingsIcon, ArrowRightIcon, HomeIcon, TrashIcon, SearchIcon,
  BellIcon, CheckIcon, UserIcon, LogoutIcon, MenuIcon,
  EditIcon, HeartIcon, EyeOpenIcon, ChevronDownIcon, PlusIcon,
  CloudUploadIcon, CartIcon, CloseIcon, FilterIcon, LockIcon,
  ShareIcon, InfoIcon, CopyIcon, CalendarIcon, MailIcon,
  ChevronRightIcon, DownloadIcon, StarIcon, RefreshIcon, ExternalLinkIcon,
  ShieldIcon, HelpCircleIcon, DashboardIcon, ArrowLeftIcon, ChevronUpIcon, 
  ChevronLeftIcon, EyeCloseIcon, LoginIcon, PasteIcon, PrescriptionIcon, UserCheckIcon,
  SendIcon, RxIcon
} from './components/Icons';

import { Button, ButtonContent } from './components/Button/index';
import { Select } from './components/Select/index';
import './styles/global.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);

  const [iconSize, setIconSize] = useState<number>(24);
  const [iconColor, setIconColor] = useState<string>('#3b82f6');

  const [isSettingsActive, setIsSettingsActive] = useState(false);

  const allIcons = [
    { name: 'HomeIcon', component: <HomeIcon size={iconSize} stroke={iconColor} /> },
    { name: 'DashboardIcon', component: <DashboardIcon size={iconSize} stroke={iconColor} /> },
    { name: 'SettingsIcon', component: <SettingsIcon size={iconSize} stroke={iconColor} /> },
    { name: 'ArrowRightIcon', component: <ArrowRightIcon size={iconSize} stroke={iconColor} /> },
    { name: 'ArrowLeftIcon', component: <ArrowLeftIcon size={iconSize} stroke={iconColor} /> },
    { name: 'TrashIcon', component: <TrashIcon size={iconSize} stroke={iconColor} /> },
    { name: 'SearchIcon', component: <SearchIcon size={iconSize} stroke={iconColor} /> },
    { name: 'BellIcon', component: <BellIcon size={iconSize} stroke={iconColor} /> },
    { name: 'CheckIcon', component: <CheckIcon size={iconSize} stroke={iconColor} /> },
    { name: 'UserIcon', component: <UserIcon size={iconSize} stroke={iconColor} /> },
    { name: 'UserCheckIcon', component: <UserCheckIcon size={iconSize} stroke={iconColor} /> },
    { name: 'LoginIcon', component: <LoginIcon size={iconSize} stroke={iconColor} /> },
    { name: 'LogoutIcon', component: <LogoutIcon size={iconSize} stroke={iconColor} /> },
    { name: 'MenuIcon', component: <MenuIcon size={iconSize} stroke={iconColor} /> },
    { name: 'EditIcon', component: <EditIcon size={iconSize} stroke={iconColor} /> },
    { name: 'HeartIcon', component: <HeartIcon size={iconSize} stroke={iconColor} /> },
    { name: 'EyeIcon', component: <EyeOpenIcon size={iconSize} stroke={iconColor} /> },
    { name: 'EyeOffIcon', component: <EyeCloseIcon size={iconSize} stroke={iconColor} /> },
    { name: 'ChevronUpIcon', component: <ChevronUpIcon size={iconSize} stroke={iconColor} /> },
    { name: 'ChevronDownIcon', component: <ChevronDownIcon size={iconSize} stroke={iconColor} /> },
    { name: 'ChevronLeftIcon', component: <ChevronLeftIcon size={iconSize} stroke={iconColor} /> },
    { name: 'ChevronRightIcon', component: <ChevronRightIcon size={iconSize} stroke={iconColor} /> },
    { name: 'PlusIcon', component: <PlusIcon size={iconSize} stroke={iconColor} /> },
    { name: 'CloudUploadIcon', component: <CloudUploadIcon size={iconSize} stroke={iconColor} /> },
    { name: 'CartIcon', component: <CartIcon size={iconSize} stroke={iconColor} /> },
    { name: 'CloseIcon', component: <CloseIcon size={iconSize} stroke={iconColor} /> },
    { name: 'FilterIcon', component: <FilterIcon size={iconSize} stroke={iconColor} /> },
    { name: 'LockIcon', component: <LockIcon size={iconSize} stroke={iconColor} /> },
    { name: 'ShareIcon', component: <ShareIcon size={iconSize} stroke={iconColor} /> },
    { name: 'InfoIcon', component: <InfoIcon size={iconSize} stroke={iconColor} /> },
    { name: 'CopyIcon', component: <CopyIcon size={iconSize} stroke={iconColor} /> },
    { name: 'PasteIcon', component: <PasteIcon size={iconSize} stroke={iconColor} /> },
    { name: 'CalendarIcon', component: <CalendarIcon size={iconSize} stroke={iconColor} /> },
    { name: 'MailIcon', component: <MailIcon size={iconSize} stroke={iconColor} /> },
    { name: 'DownloadIcon', component: <DownloadIcon size={iconSize} stroke={iconColor} /> },
    { name: 'PrescriptionIcon', component: <PrescriptionIcon size={iconSize} stroke={iconColor} /> },
    { name: 'StarIcon', component: <StarIcon size={iconSize} stroke={iconColor} /> },
    { name: 'RefreshIcon', component: <RefreshIcon size={iconSize} stroke={iconColor} /> },
    { name: 'ExternalLinkIcon', component: <ExternalLinkIcon size={iconSize} stroke={iconColor} /> },
    { name: 'ShieldIcon', component: <ShieldIcon size={iconSize} stroke={iconColor} /> },
    { name: 'HelpCircleIcon', component: <HelpCircleIcon size={iconSize} stroke={iconColor} /> },
    { name: 'SendIcon', component: <SendIcon size={iconSize} stroke={iconColor} /> },
    { name: 'RxIcon', component: <RxIcon size={iconSize} stroke={iconColor} /> },
  ];

  return (
    <>
      <div style={{ padding: '1.5rem', fontFamily: 'sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
        
        <div style={{ marginBottom: '20px' }}>
          <Button variant="primary" onClick={toggleTheme}>Toggle Theme (Current: {theme})</Button>
        </div>
        
        <hr style={{ border: '1px solid #e2e8f0' }} />
        <h2>Demo Components</h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
          <Button variant="danger" onClick={() => setCount(c => c + 1)}>Count {count}</Button>
          <Button variant="primary" size="lg">Big Premium Button</Button>
          <Button variant="secondary" size="sm">Small Compact Button</Button>
          <Button variant="ghost" fullWidth>Submit Full Form</Button>
          
          <Button variant="outline" icon={<PlusIcon size={20} />} iconOnly shape="circle" size="lg" />
          
          <Button variant="ghost">Cancel</Button>
          <Button variant="secondary" icon={<SettingsIcon size={20} />} iconOnly />
          
          <Button animated variant="primary" tooltip="Goto the next step">
            <ButtonContent visible>Next Step</ButtonContent>
            <ButtonContent hidden><ArrowRightIcon size={20} /></ButtonContent>
          </Button>
          
          <Button animated="vertical" color="#ff5a5f" textColor="#fff"tooltipTitle="Are you sure?" tooltipDescription="This action cannot be undone and will delete all assets permanent." tooltipPosition="right">
            <ButtonContent visible>Download</ButtonContent>
            <ButtonContent hidden>100 KB</ButtonContent>
          </Button>
        </div>

        <div style={{ maxWidth: '300px', marginBottom: '20px' }}>
          <Select label="Choose" options={[{ value: '1', label: 'One' }, { value: '2', label: 'Two' }]} />
        </div>
        
        <div style={{ marginBottom: '30px' }}>
          <Button 
            variant="secondary" 
            onClick={() => setShowModal(true)}
            tooltip="Click to open full dashboard details"
          >
            Open Modal
          </Button>
          
        </div>

        <Input 
          label="Username" 
          material={true} 
          width={300} 
        />
        <Input 
          label="Search Items" 
          material={false}
          width={300}
          animatedPlaceholders={["Type 'Apple'...", "Search by Category..."]} 
        />
        <Input 
          label="Email Field" 
          placeholder="example@domain.com"
          width={300}
          //password={true}
          //rightIcon={true}
          //leftIcon={<SearchIcon />}
        />

        <Switch 
          // label="Enterprise Cloud Sync (Premium Only)" 
          size="small"
          // disabled={true}
          // checked={false} 
        />

        <Modal 
          isOpen={showModal} 
          onClose={() => setShowModal(false)}
          title="Account Configuration"
          subtitle="Manage your personal workspace system preferences below"
        >
          <p>This is the inside content of your perfectly animated modal overlay!</p>
        </Modal>

        <hr style={{ margin: '40px 0', border: '1px solid #e2e8f0' }} />

        <h2 style={{ marginBottom: '10px' }}>Icon Pack Laboratory ({allIcons.length} Icons)</h2>
        
        <div style={{ marginBottom: '25px', padding: '15px', backgroundColor: '#e2e8f0', borderRadius: '8px', display: 'flex', gap: '25px', alignItems: 'center' }}>
          <label style={{ fontWeight: 'bold', fontSize: '14px', color: '#334155' }}>
            Icon Size: 
            <input 
              type="number" 
              value={iconSize} 
              onChange={(e) => setIconSize(Number(e.target.value))} 
              style={{ marginLeft: '8px', width: '60px', padding: '6px', borderRadius: '4px', border: '1px solid #94a3b8' }} 
            /> px
          </label>
          <label style={{ fontWeight: 'bold', fontSize: '14px', color: '#334155' }}>
            Icon Color: 
            <input 
              type="color" 
              value={iconColor} 
              onChange={(e) => setIconColor(e.target.value)} 
              style={{ marginLeft: '8px', verticalAlign: 'middle', border: 'none', background: 'none', cursor: 'pointer', width: '35px', height: '35px' }} 
            />
          </label>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '15px' }}>
          {allIcons.map((icon, index) => (
            <div 
              key={index} 
              style={{ 
                backgroundColor: '#fff', 
                padding: '22px 12px', 
                borderRadius: '8px', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: '12px',
                border: '1px solid #cbd5e1',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                transition: 'all 0.2s ease'
              }}
            >
              {icon.component}
              
              <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500', textAlign: 'center', wordBreak: 'break-all' }}>
                {icon.name}
              </span>
            </div>
          ))}
        </div>
        <h2>Demo Components</h2>
      
      <Button 
        variant="secondary" 
        onClick={() => setIsSettingsActive(!isSettingsActive)} 
        icon={<SettingsIcon size={20} filled={isSettingsActive} />} 
        iconOnly 
      />
      </div>
      <section id="spacer" style={{ height: '80px' }}></section>
    </>
  );
}

export default App;