import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import CityService from '../services/CityService';
import { Form, TextArea } from 'semantic-ui-react'
import { Select } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'



export default function City() {
    const LevelOptions = [{ text: '1' }, { text: '2' }, { text: '3' }, { text: '4' }, { text: '5' }]
    const [cities, setCities] = useState([]);

    useEffect(() => {
        let cityService = new CityService();
        cityService.getCities().then(result => setCities(result.data.data))
    })

    const countryOptions = [
        { text: 'ADANA' },
        { text: 'ADIYAMAN' },
        { text: 'AFYONKARAHİSAR' },
        { text: 'AĞRI' },
        { text: 'AMASYA' },
        { text: 'ANKARA' },
        { text: 'ANTALYA' },
        { text: 'ARTVİN' },
        { text: 'AYDIN' },
        { text: 'BALIKESİR' },
        { text: 'BİLECİK' },
        { text: 'BİNGÖL' },
        { text: 'BİTLİS' },
        { text: 'BOLU' },
        { text: 'BURDUR' },
        { text: 'BURSA' },
        { text: 'ÇANAKKALE' },
        { text: 'ÇANKIRI' },
        { text: 'ÇORUM' },
        { text: 'DENİZLİ' },
        { text: 'DİYARBAKIR' },
        { text: 'EDİRNE' },
        { text: 'ELAZIĞ' },
        { text: 'ERZİNCAN' },
        { text: 'ERZURUM' },
        { text: 'ESKİŞEHİR' },
        { text: 'GAZİANTEP' },
        { text: 'GİRESUN' },
        { text: 'GÜMÜŞHANE' },
        { text: 'HAKKARİ' },
        { text: 'HATAY' },
        { text: 'ISPARTA' },
        { text: 'MERSİN' },
        { text: 'İSTANBUL' },
        { text: 'İZMİR' },
        { text: 'KARS' },
        { text: 'KASTAMONU' },
        { text: 'KAYSERİ' },
        { text: 'KIRKLARELİ' },
        { text: 'KIRŞEHİR' },
        { text: 'KOCAELİ' },
        { text: 'KONYA' },
        { text: 'KÜTAHYA' },
        { text: 'MALATYA' },
        { text: 'MANİSA' },
        { text: 'KAHRAMANMARAŞ' },
        { text: 'MARDİN' },
        { text: 'MUĞLA' },
        { text: 'MUŞ' },
        { text: 'NEVŞEHİR' },
        { text: 'NİĞDE' },
        { text: 'ORDU' },
        { text: 'RİZE' },
        { text: 'SAKARYA' },
        { text: 'SAMSUN' },
        { text: 'SİİRT' },
        { text: 'SİNOP' },
        { text: 'SİVAS' },
        { text: 'TEKİRDAĞ' },
        { text: 'TOKAT' },
        { text: 'TRABZON' },
        { text: 'TUNCELİ' },
        { text: 'ŞANLIURFA' },
        { text: 'UŞAK' },
        { text: 'VAN' },
        { text: 'YOZGAT' },
        { text: 'ZONGULDAK' },
        { text: 'AKSARAY' },
        { text: 'BAYBURT' },
        { text: 'KARAMAN' },
        { text: 'KIRIKKALE' },
        { text: 'BATMAN' },
        { text: 'ŞIRNAK' },
        { text: 'BARTIN' },
        { text: 'ARDAHAN' },
        { text: 'IĞDIR' },
        { text: 'YALOVA' },
        { text: 'KARABÜK' },
        { text: 'KİLİS' },
        { text: 'OSMANİYE' },
        { text: 'DÜZCE' },

    ]

    return (
        <Form>
            <Select placeholder='Şehrinizi seçiniz' options={countryOptions} />
            <TextArea rows={2} placeholder='İş tecrübenizi yazınız(Tecrübeniz yoksa lütfen boş bırakmayınız))' />
            <TextArea rows={2} placeholder='Bildiğiniz dilleri yazınız' />
            <Select placeholder='Yabancı Dil Seviyenizi Belirtiniz' options={LevelOptions} />
            <TextArea placeholder='Hangi teknolojilere hakimsiniz?(Java-Python vb.)' />
            <Button>Cancel</Button>
            <Button.Or />
            <Button positive>Save</Button>
        </Form>

    )
}


