import React from 'react'
import { useParams } from 'react-router'
import { Button, Grid, Image, Segment, Container } from 'semantic-ui-react'
import JobAdvertService from '../services/JobAdvertService'
import { useState } from 'react'
import { useEffect } from 'react'
export default function JobAdvertDetail() {
    let { id } = useParams()
    const [jobAdvert, setJobAdvert] = useState({});

  useEffect(() => {
    let jobAdvertService = new JobAdvertService()
    jobAdvertService.getById(id).then(result => setJobAdvert(result.data.data))
  }, [])
    return (
        <div>

            <Container
                style={{
                    textAllign: "center",
                    display: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    height: "100vh"
                }}
            >
                <Segment>
                    <Grid >
                        <Grid.Column>
                            <h1 style={{ marginLeft: '0em' }}>
                                Genel Nitelikler
                            </h1>
                            <p style={{ marginLeft: '0em' }}>
                                Üniversitelerin Bilgisayar Mühendisliği, Yazılım Mühendisliği, Elektrik & Elektronik Mühendisliği veya eşdeğer mühendislik fakültelerinden mezun,
                                Analitik düşünebilen, enerjisi yüksek bir ekipte takım arkadaşları ile pozitif ilişkiler geliştirebilecek,
                                Öğrenmeye açık, problem çözme becerisi olan, kendini geliştirme ve yeni teknolojileri takip etme isteğine sahip,
                                İleri düzeyde İngilizce bilen,
                                Esnek çalışma saatlerine ayak uydurabilecek,
                                Araştırma, planlama, uygulama, iş disiplini ve raporlama yetenekleri güçlü
                                Erkek adaylar için askerlik hizmetini tamamlamış olmak,
                                Benzer pozisyonda minimum 5 yıl tecrübeli
                                Windows ve Linux işletim sistemlerinde bilgi ve tecrübeye sahip,
                                Microsoft Active Directory, Exchange Server, Office365, Skype for Business, Azure konularında hakkında bilgi sahibi ve operasyonel yönetim tecrübesi olan,
                                Sanallaştırma teknolojileri (Hyper-v / Vmware) konusunda bilgi ve tecrübeye sahip,
                                Batch ve Powershell scripting konusunda deneyimli,
                                Depolama ve yedekleme sistemleri konusunda bilgi sahibi,
                                Network mimarisi ve yönetimi konusunda bilgi sahibi (Domain, WAN/LAN, TCP/IP, DNS, IIS / SMTP, Active Directory, VPN, GPO)
                            </p>
                            <h2>
                                İş Tanımı
                            </h2>
                            <p style={{ marginLeft: '0em' }}>
                                Şirket IT altyapısının bakımının, geliştirilmesinin ve sürekliliğinin sağlanması,
                                SLA kapsamında şirket içi sistemlerle ilgili oluşabilecek sistemsel seviyede problemlere ilişkin destek/geliştirme taleplerini karşılamak,
                                Proje bazlı çalışmalarda sunucu, veri depolama hizmetleriyle ile ilgili kurulum ve yönetimi yapmak,
                                Destek verilen ürünlerle ilgili gerektiğinde yurtdışına destek talebi açmak veya açılmış olan destek taleplerinin takibini yapmak,
                                Yapılan çalışmaların düzenli olarak raporlanması ve dokümante edilmesi.
                            </p>
                            <Button  primary type="submit">Başvur</Button>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </Container>

        </div>
    )
}
