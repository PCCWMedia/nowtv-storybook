import React from 'react';
import Link from '../../../components/Link/Link';
import InputBox from '../../../components/Form/InputBox/InputBox';
import { Button } from '../../../components/Button/Button';
import EditableField from '../../../components/MyAccount/EditableField';
import InfoItem from '../../../components/MyAccount/InfoItem';
import SectionAccordion from '../../../components/MyAccount/SectionAccordion';

interface ProfileSectionProps {
  onNicknameChange?: (nickname: string) => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ onNicknameChange }) => {
  // Now ID
  const nowId = '91234567';
  const nowEmail = 'davidchan@gmail.com';

  // Password (no edit logic, just change link)

  // Contact Mobile
  const [mobileValue, setMobileValue] = React.useState('91234567');
  // Contact Email
  const [emailValue, setEmailValue] = React.useState('davidchan@gmail.com');
  // Contact Phone No.
  const [phoneValue, setPhoneValue] = React.useState('91234567');
  const [isPhoneAdded, setIsPhoneAdded] = React.useState(!!phoneValue);
  // Nickname
  const [nicknameValue, setNicknameValue] = React.useState('');
  const [isNicknameAdded, setIsNicknameAdded] = React.useState(!!nicknameValue);

  // Mailing Address (edit all at once)
  const [isEditingAddress, setIsEditingAddress] = React.useState(false);
  const [address, setAddress] = React.useState([
    '14/F Telecom Hse (14/F)',
    '3 Gloucester Road',
    'Wan Chai Hong Kong',
    '', '', ''
  ]);
  const [addressInput, setAddressInput] = React.useState([...address]);

  // When edit mode toggles off, reset input
  React.useEffect(() => {
    if (!isEditingAddress) setAddressInput([...address]);
  }, [isEditingAddress, address]);

  // Nickname
  const [isEditingNickname, setIsEditingNickname] = React.useState(false);
  const [nicknameInput, setNicknameInput] = React.useState('');

  // Handle nickname save and notify parent
  const handleNicknameSave = () => {
    setNicknameValue(nicknameInput);
    setIsNicknameAdded(true);
    setIsEditingNickname(false);
    if (onNicknameChange) onNicknameChange(nicknameInput);
  };

  // State
  // Remove these lines:
  // const [editIndex, setEditIndex] = React.useState<number | null>(null);
  // const [addressInput, setAddressInput] = React.useState('');
  // ... rest of the file remains unchanged ...

  // UI
  return (
    <SectionAccordion title="Profile" defaultOpenMobile={true}>
      {/* Now ID */}
      <InfoItem
        label="Now ID"
        value={
          <>
            <b className="checked">{nowId}</b>
            <Link href="#" label="Change Now ID (Mobile)" target="_blank" className="arrow mobile" />
            <b>
              {nowEmail} <a href="#" target="_blank" className="verify">Verify now</a>
            </b>
          </>
        }
        controls={
          <>
            <Link href="#" label="Change Now ID (Mobile)" target="_blank" className="arrow desktop" />
            <Link href="#" label="Change Now ID (Email)" target="_blank" className="arrow" />
          </>
        }
      />
      {/* Password */}
      <InfoItem
        label="Password"
        value={<b>**********</b>}
        controls={
          <Link
            href="https://id.now.com/nowidform/changepw.form?lang=en"
            label="Change Password"
            target="_blank"
            className="arrow"
          />
        }
      />
      {/* Contact Mobile */}
      <EditableField
        label="Contact Mobile"
        value={mobileValue}
        onSave={setMobileValue}
        validate={val => /^([9|7|6|5|4])[0-9]{7}$/.test(val) ? null : 'Invalid Mobile No.'}
        placeholder="Contact Mobile"
      />
      {/* Contact Email */}
      <EditableField
        label="Contact Email"
        value={emailValue}
        onSave={setEmailValue}
        validate={val => /^[^\s@]+@[^-\s@]+\.[^\s@]+$/.test(val) ? null : 'Invalid Email'}
        placeholder="Contact Email"
        type="email"
      />
      {/* Contact Phone No. */}
      <EditableField
        label="Contact Phone No."
        value={phoneValue}
        onSave={val => { setPhoneValue(val); setIsPhoneAdded(true); }}
        validate={val => /^([9|7|6|5|4|2|3])[0-9]{7}$/.test(val) ? null : 'Invalid Phone No.'}
        placeholder="Phone No."
        addLabel="+ Add a Contact Phone No."
      />
      {/* Address */}
      <div className='item'>
        <h6>Address</h6>
        <div className={`information address${isEditingAddress ? ' editMode' : ''}`}>
          <div className="data">
            {address.filter(Boolean).length > 0 && (
              <b>
                {address.filter(Boolean).map((addr, idx, arr) =>
                  idx < arr.length - 1 ? (
                    <React.Fragment key={idx}>{addr}<br/></React.Fragment>
                  ) : (
                    <React.Fragment key={idx}>{addr}</React.Fragment>
                  )
                )}
              </b>
            )}
          </div>
          <div className="controls">
            {!isEditingAddress && (
              <Link href="#" label="Change" className="arrow" onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { e.preventDefault(); setIsEditingAddress(true); }} />
            )}
          </div>
          <div className="box">
            {isEditingAddress && (
              <>
                {[...Array(6)].map((_, idx) => (
                  <InputBox
                    key={idx}
                    name={`address-${idx + 1}`}
                    label=""
                    value={addressInput[idx]}
                    placeholder={`Address ${idx + 1}`}
                    autoComplete="off"
                    onChange={val => {
                      const newInput = [...addressInput];
                      newInput[idx] = val;
                      setAddressInput(newInput);
                    }}
                  />
                ))}
                <div className="cta-buttons">
                  <Button
                    label="Save"
                    className="btn primary"
                    disabled={addressInput.join() === address.join()}
                    onClick={() => {
                      setAddress([...addressInput]);
                      setIsEditingAddress(false);
                    }}
                  />
                  <Button
                    label="Cancel"
                    className="btn outline"
                    onClick={() => setIsEditingAddress(false)}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Nickname */}
      <EditableField
        label="Nickname"
        value={nicknameValue}
        onSave={val => { setNicknameValue(val); setIsNicknameAdded(true); if (onNicknameChange) onNicknameChange(val); }}
        placeholder="Nickname"
        addLabel="+ Add Nickname"
      />
    </SectionAccordion>
  );
};

export default ProfileSection; 