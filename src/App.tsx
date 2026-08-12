import { useState, useEffect } from 'react'

import logoPng from '@/imports/Logo.png'
import racaPng from '@/imports/Logo.png'
import raul2 from '@/imports/raul2.jpg'
import cleo2 from '@/imports/cleo2.jpg'
import dupla2 from '@/imports/dupla2.jpg'
import dupla3 from '@/imports/dupla3.jpg'
import dupla4 from '@/imports/dupla4.png'
import fotoDupla from '@/imports/foto_dupla.jpg'

const GOLD = '#c9a84c'
const GOLD_DIM = 'rgba(201,168,76,0.10)'
const GOLD_BORDER = 'rgba(201,168,76,0.20)'

const NAV_LINKS = [
  { label: 'Galeria', href: '#galeria' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Shows', href: '#shows' },
  { label: 'Agende', href: '#agende' },
]

const SHOWS = [
  { name: 'Raça Sunset', date: 'Dez 2025', style: 'Sunset House · Open Format', venue: 'São Paulo — SP' },
  { name: 'Gincoteca Drinks', date: 'Nov 2025', style: 'Residency · House · Open Format', venue: 'São Paulo — SP' },
  { name: 'Mansão Maromba São Miguel', date: 'Ago 2025', style: 'Electronic · High Energy · UP', venue: 'São Miguel — SP' },
]

const SERVICES = [
  { title: 'Casamentos', desc: 'Da cerimônia ao after, trilha sonora personalizada que acompanha cada momento do seu grande dia.' },
  { title: 'Eventos Corporativos', desc: 'Atmosfera ideal para confraternizações, lançamentos de produto e festas institucionais.' },
  { title: 'Festas Privadas', desc: 'Sets construídos para sua pista — leitura de público apurada e energia constante do início ao  m.' },
  { title: 'Open Format', desc: 'Flexibilidade para transitar entre House, Pop, Funk, Eletrônico e tudo que o momento pedir.' },
]

const inputStyle: React.CSSProperties = {
  background: '#111111',
  border: '1px solid transparent',
  color: '#f0ece4',
  padding: '18px 20px',
  fontSize: '14px',
  fontFamily: "'Outfit', sans-serif",
  width: '100%',
  transition: 'border-color 0.2s',
  outline: 'none',
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({ nome: '', email: '', evento: '', data: '', mensagem: '' })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Olá! Quero solicitar um orçamento.\n\nNome: ${formData.nome}\nEmail: ${formData.email}\nTipo de evento: ${formData.evento}\nData: ${formData.data}\n\n${formData.mensagem}`
    )
    window.open(`https://wa.me/5511958033749?text=${msg}`, '_blank')
  }

  return (
    <div style={{ backgroundColor: '#080808', color: '#f0ece4', fontFamily: "'Outfit', sans-serif", minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ── NAV ── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '14px 48px' : '24px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(8,8,8,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? `1px solid ${GOLD_BORDER}` : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}>
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img
            src={logoPng}
            alt="RACA Eventos"
            style={{ height: scrolled ? '36px' : '44px', width: 'auto', transition: 'height 0.4s ease', filter: 'brightness(0) invert(1)' }}
          />
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '40px', alignItems: 'center' }} className="nav-desktop">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} style={{
              textDecoration: 'none', color: 'rgba(240,236,228,0.55)',
              fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,236,228,0.55)')}
            >{l.label}</a>
          ))}
          <a href="#agende" style={{
            textDecoration: 'none', color: '#080808', background: GOLD,
            padding: '11px 28px', fontSize: '11px', letterSpacing: '0.2em',
            textTransform: 'uppercase', fontWeight: 600,
            transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >Solicitar Orçamento</a>
        </nav>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: '5px', padding: '4px', display: 'none' }} className="nav-mobile-btn">
          {[0, 1, 2].map(i => (
            <span key={i} style={{ display: 'block', width: '24px', height: '1px', background: GOLD, transition: 'all 0.3s',
              transform: menuOpen ? (i === 0 ? 'rotate(45deg) translate(4px,4px)' : i === 1 ? 'scaleX(0)' : 'rotate(-45deg) translate(4px,-4px)') : 'none',
            }} />
          ))}
        </button>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 99, background: '#080808', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '40px' }}>
          <img src={logoPng} alt="RACA Eventos" style={{ height: '52px', filter: 'brightness(0) invert(1)', marginBottom: '16px' }} />
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: '#f0ece4', fontSize: '28px', fontFamily: "'Fraunces', serif", letterSpacing: '0.05em' }}>{l.label}</a>
          ))}
          <a href="#agende" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: '#080808', background: GOLD, padding: '14px 40px', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginTop: '16px' }}>Solicitar Orçamento</a>
        </div>
      )}

      {/* ── HERO ── */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '640px', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        {/* Hero image — dupla4.png: ambos apontando, muita energia */}
        <img
          src={dupla4}
          alt="DJ Cleo e DJ Ruzão no palco"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center top',
            filter: 'contrast(1.12) brightness(0.78) saturate(0.85)',
          }}
        />
        {/* Overlays */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #080808 0%, rgba(8,8,8,0.52) 50%, rgba(8,8,8,0.08) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(8,8,8,0.68) 0%, transparent 55%)' }} />

        {/* RACA watermark — large, low opacity */}
        <img
          src={racaPng}
          alt=""
          aria-hidden
          style={{
            position: 'absolute', right: '0%', top: '50%', transform: 'translateY(-50%)',
            width: '55%', opacity: 0.04, pointerEvents: 'none',
            filter: 'brightness(10)',
          }}
        />

        <div style={{ position: 'relative', zIndex: 2, padding: '0 48px 88px', maxWidth: '860px' }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.38em', textTransform: 'uppercase', color: GOLD, marginBottom: '22px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ display: 'block', width: '36px', height: '1px', background: GOLD }} />
            DJ Cleo &amp; DJ Ruzão · São Paulo
          </div>
          <h1 style={{
            fontFamily: "'Fraunces', serif", fontWeight: 700,
            fontSize: 'clamp(52px, 9vw, 116px)',
            lineHeight: 0.9, letterSpacing: '-0.02em',
            color: '#f0ece4', marginBottom: '34px',
          }}>
            Energia.<br />
            <em style={{ fontStyle: 'italic', color: GOLD }}>Experiências.</em><br />
            Vibrações.
          </h1>
          <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'rgba(240,236,228,0.6)', maxWidth: '420px', marginBottom: '52px' }}>
            Duo de DJs residentes em São Paulo para casamentos, festas e eventos corporativos — com energia e leitura de pista que fazem a diferença.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="#agende" style={{ textDecoration: 'none', background: GOLD, color: '#080808', padding: '17px 44px', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600, transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.84')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >Solicitar Orçamento</a>
            <a href="#sobre" style={{ textDecoration: 'none', border: `1px solid ${GOLD_BORDER}`, color: 'rgba(240,236,228,0.8)', padding: '17px 44px', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', transition: 'border-color 0.2s, color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = GOLD_BORDER; e.currentTarget.style.color = 'rgba(240,236,228,0.8)' }}
            >Conhecer o Duo</a>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position: 'absolute', right: '48px', bottom: '88px', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(240,236,228,0.28)', writingMode: 'vertical-lr' }}>scroll</span>
          <div style={{ width: '1px', height: '48px', background: `linear-gradient(to bottom, ${GOLD}, transparent)` }} />
        </div>
      </section>

      {/* ── GOLD STRIP ── */}
      <div style={{ background: GOLD, padding: '15px 48px', display: 'flex', gap: '0', overflowX: 'auto', alignItems: 'center', justifyContent: 'space-around' }}>
        {['Casamentos', 'Eventos Corporativos', 'Festas Privadas', 'Open Format', 'São Paulo & Região'].map(s => (
          <span key={s} style={{ fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#080808', fontWeight: 600, whiteSpace: 'nowrap', padding: '0 16px' }}>{s}</span>
        ))}
      </div>

      {/* ── SERVICES ── */}
      <section style={{ padding: '120px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: '10px', letterSpacing: '0.38em', textTransform: 'uppercase', color: GOLD, marginBottom: '18px' }}>O que fazemos</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(34px, 4vw, 54px)', fontWeight: 600, lineHeight: 1.1, color: '#f0ece4', marginBottom: '40px' }}>
              Cada evento merece uma trilha à sua altura
            </h2>
            {/* dupla2 — palco oficial com banner RACA */}
            <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3', background: '#111' }}>
              <img
                src={dupla2}
                alt="DJ Cleo e DJ Ruzão no palco com banner RACA Eventos"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', filter: 'contrast(1.1) brightness(0.82) saturate(1.3)', display: 'block', transition: 'transform 0.7s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${GOLD_DIM} 0%, transparent 60%)` }} />
              <div style={{ position: 'absolute', bottom: '24px', left: '24px' }}>
                <div style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: GOLD }}>@racaeventossp</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gap: '2px', marginTop: '16px' }}>
            {SERVICES.map((s, i) => (
              <div key={s.title} style={{
                padding: '30px 32px', background: '#111111',
                borderLeft: `2px solid ${i === 0 ? GOLD : 'transparent'}`,
                transition: 'border-color 0.3s, background 0.3s', cursor: 'default',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderLeftColor = GOLD; (e.currentTarget as HTMLDivElement).style.background = '#161616' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderLeftColor = i === 0 ? GOLD : 'transparent'; (e.currentTarget as HTMLDivElement).style.background = '#111111' }}
              >
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '19px', fontWeight: 600, color: '#f0ece4', marginBottom: '8px' }}>{s.title}</h3>
                <p style={{ fontSize: '13px', lineHeight: 1.75, color: 'rgba(240,236,228,0.45)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / DUO ── */}
      <section id="sobre" style={{ padding: '0 0 120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.38em', textTransform: 'uppercase', color: GOLD, marginBottom: '14px' }}>O Duo</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(34px, 4vw, 54px)', fontWeight: 600, lineHeight: 1.1, color: '#f0ece4' }}>
              Duas perspectivas.<br /><em style={{ fontStyle: 'italic' }}>Uma pista só.</em>
            </h2>
          </div>

          {/* DJ cards side-by-side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px', marginBottom: '3px' }}>
            {/* DJ Cleo */}
            <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4', background: '#111' }}>
              <img
                src={cleo2}
                alt="DJ Cleo no controle"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', filter: 'contrast(1.18) brightness(0.75) saturate(1.3)', display: 'block', transition: 'transform 0.7s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              {/* gold tint overlay */}
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.1) 50%, transparent 100%)` }} />
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(160deg, ${GOLD_DIM} 0%, transparent 50%)` }} />
              <div style={{ position: 'absolute', bottom: '36px', left: '36px', right: '36px' }}>
                <div style={{ fontSize: '9px', letterSpacing: '0.32em', textTransform: 'uppercase', color: GOLD, marginBottom: '6px' }}>DJ Cleo</div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '26px', fontWeight: 600, color: '#f0ece4', marginBottom: '10px', lineHeight: 1.1 }}>A base perfeita da pista</h3>
                <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'rgba(240,236,228,0.55)' }}>
                  Sets em evolução constante, construídos com sensibilidade para o público — fundação que sustenta cada momento da noite.
                </p>
                <a href="https://instagram.com/djcleoosilva" target="_blank" rel="noopener noreferrer"
                  style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '16px', fontSize: '11px', letterSpacing: '0.15em', color: GOLD, opacity: 0.7, transition: 'opacity 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
                  @djcleoosilva
                </a>
              </div>
            </div>

            {/* DJ Ruzão */}
            <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4', background: '#111' }}>
              <img
                src={raul2}
                alt="DJ Ruzão no controle"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 10%', filter: 'contrast(1.18) brightness(0.75) saturate(1.3)', display: 'block', transition: 'transform 0.7s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.1) 50%, transparent 100%)' }} />
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(200deg, ${GOLD_DIM} 0%, transparent 50%)` }} />
              <div style={{ position: 'absolute', bottom: '36px', left: '36px', right: '36px' }}>
                <div style={{ fontSize: '9px', letterSpacing: '0.32em', textTransform: 'uppercase', color: GOLD, marginBottom: '6px' }}>DJ Ruzão</div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '26px', fontWeight: 600, color: '#f0ece4', marginBottom: '10px', lineHeight: 1.1 }}>O pico de intensidade</h3>
                <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'rgba(240,236,228,0.55)' }}>
                  Mixagem precisa e leitura impecável de pista — conduzindo o momento de maior energia com domínio técnico e instinto apurado.
                </p>
                <a href="https://instagram.com/ruzao_dj" target="_blank" rel="noopener noreferrer"
                  style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '16px', fontSize: '11px', letterSpacing: '0.15em', color: GOLD, opacity: 0.7, transition: 'opacity 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
                  @ruzao_dj
                </a>
              </div>
            </div>
          </div>

          {/* foto_dupla — retrato mais caloroso, largura total */}
          <div style={{ position: 'relative', overflow: 'hidden', height: '340px', background: '#111' }}>
            <img
              src={fotoDupla}
              alt="DJ Cleo e DJ Ruzão juntos"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'contrast(1.1) brightness(0.72) saturate(1.3)', display: 'block', transition: 'transform 0.7s ease' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(8,8,8,0.75) 0%, rgba(8,8,8,0.1) 50%, rgba(8,8,8,0.75) 100%)' }} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px' }}>
              <div style={{ fontSize: '10px', letterSpacing: '0.38em', textTransform: 'uppercase', color: GOLD }}>Desde 2023</div>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px, 4vw, 48px)', color: '#f0ece4', fontWeight: 600, textAlign: 'center', letterSpacing: '-0.01em' }}>
                Raça nos une na pista
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHOWS ── */}
      <section id="shows" style={{ padding: '120px 48px', background: '#0d0d0d' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <div style={{ fontSize: '10px', letterSpacing: '0.38em', textTransform: 'uppercase', color: GOLD, marginBottom: '14px' }}>Histórico</div>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(34px, 4vw, 54px)', fontWeight: 600, lineHeight: 1.1, color: '#f0ece4' }}>
                Shows realizados
              </h2>
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(240,236,228,0.38)', maxWidth: '280px', lineHeight: 1.75 }}>
              Experiência construída em cada apresentação — da residência aos grandes eventos.
            </p>
          </div>

          <div style={{ borderTop: `1px solid ${GOLD_BORDER}` }}>
            {SHOWS.map((show, i) => (
              <div key={show.name} style={{
                display: 'grid', gridTemplateColumns: '1fr 140px 220px 100px',
                alignItems: 'center', gap: '24px',
                padding: '30px 20px',
                borderBottom: `1px solid ${GOLD_BORDER}`,
                transition: 'background 0.25s', cursor: 'default',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = GOLD_DIM)}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <div>
                  <div style={{ fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', color: GOLD, marginBottom: '5px' }}>0{i + 1}</div>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '21px', fontWeight: 600, color: '#f0ece4' }}>{show.name}</h3>
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(240,236,228,0.38)', letterSpacing: '0.05em' }}>{show.date}</div>
                <div style={{ fontSize: '12px', color: 'rgba(240,236,228,0.45)', letterSpacing: '0.04em' }}>{show.style}</div>
                <div style={{ fontSize: '11px', color: 'rgba(240,236,228,0.28)', textAlign: 'right' }}>{show.venue}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EQUIPMENT / ATMOSPHERE ── */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        {/* dupla3 — performance noturna com luzes azuis */}
        <div style={{ position: 'relative', height: '560px' }}>
          <img
            src={dupla3}
            alt="DJ Ruzão em performance noturna com luzes azuis"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', filter: 'contrast(1.2) brightness(0.6) saturate(1)', display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(8,8,8,0.88) 0%, rgba(8,8,8,0.4) 50%, rgba(8,8,8,0.88) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 50%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 48px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '10px', letterSpacing: '0.38em', textTransform: 'uppercase', color: GOLD, marginBottom: '18px' }}>Estrutura</div>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 600, lineHeight: 1.1, color: '#f0ece4', marginBottom: '20px' }}>
                  Equipamentos profissionais de ponta
                </h2>
                <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(240,236,228,0.52)', marginBottom: '36px' }}>
                  Pioneer CDJ, mixers profissionais, iluminação inteligente e backup completo para cada evento.
                </p>
                <a href="#agende" style={{ textDecoration: 'none', border: `1px solid ${GOLD}`, color: GOLD, padding: '14px 36px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'inline-block', transition: 'background 0.2s, color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = '#080808' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = GOLD }}
                >Solicitar Proposta</a>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                {[
                  { icon: '◈', label: 'Mixagem Digital', desc: 'Pioneer CDJ + DJM' },
                  { icon: '◉', label: 'Som Hi-Fi', desc: 'Sistemas PA profissionais' },
                  { icon: '◆', label: 'Iluminação', desc: 'Moving heads e LED' },
                  { icon: '◎', label: 'Backup Total', desc: 'Equipamento reserva' },
                ].map(item => (
                  <div key={item.label} style={{ background: 'rgba(8,8,8,0.72)', padding: '28px 20px', backdropFilter: 'blur(8px)', border: `1px solid ${GOLD_BORDER}` }}>
                    <div style={{ fontSize: '20px', color: GOLD, marginBottom: '12px' }}>{item.icon}</div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#f0ece4', marginBottom: '6px', letterSpacing: '0.04em' }}>{item.label}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(240,236,228,0.38)', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKING FORM ── */}
      <section id="agende" style={{ padding: '120px 48px', background: '#0d0d0d' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.38em', textTransform: 'uppercase', color: GOLD, marginBottom: '14px' }}>Contato</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(34px, 4vw, 54px)', fontWeight: 600, lineHeight: 1.1, color: '#f0ece4', marginBottom: '18px' }}>
              Vamos fazer seu evento<br /><em style={{ fontStyle: 'italic', color: GOLD }}>inesquecível</em>
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(240,236,228,0.42)', lineHeight: 1.75 }}>
              Preencha abaixo e entraremos em contato pelo WhatsApp com nossa proposta.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '2px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
              <input placeholder="Seu nome" value={formData.nome} onChange={e => setFormData(p => ({ ...p, nome: e.target.value }))} required style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = GOLD)} onBlur={e => (e.currentTarget.style.borderColor = 'transparent')} />
              <input placeholder="E-mail" type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} required style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = GOLD)} onBlur={e => (e.currentTarget.style.borderColor = 'transparent')} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
              <select value={formData.evento} onChange={e => setFormData(p => ({ ...p, evento: e.target.value }))} required
                style={{ ...inputStyle, color: formData.evento ? '#f0ece4' : 'rgba(240,236,228,0.35)' }}
                onFocus={e => (e.currentTarget.style.borderColor = GOLD)} onBlur={e => (e.currentTarget.style.borderColor = 'transparent')}>
                <option value="" disabled>Tipo de evento</option>
                <option value="casamento">Casamento</option>
                <option value="corporativo">Evento Corporativo</option>
                <option value="festa">Festa Privada</option>
                <option value="outro">Outro</option>
              </select>
              <input placeholder="Data do evento" type="date" value={formData.data} onChange={e => setFormData(p => ({ ...p, data: e.target.value }))}
                style={{ ...inputStyle, colorScheme: 'dark' }}
                onFocus={e => (e.currentTarget.style.borderColor = GOLD)} onBlur={e => (e.currentTarget.style.borderColor = 'transparent')} />
            </div>
            <textarea placeholder="Conte mais sobre o evento — local, número de convidados, estilo musical..." value={formData.mensagem}
              onChange={e => setFormData(p => ({ ...p, mensagem: e.target.value }))} rows={5}
              style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
              onFocus={e => (e.currentTarget.style.borderColor = GOLD)} onBlur={e => (e.currentTarget.style.borderColor = 'transparent')} />
            <button type="submit" style={{
              background: GOLD, color: '#080808', border: 'none', padding: '20px',
              fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600,
              cursor: 'pointer', fontFamily: "'Outfit', sans-serif", transition: 'opacity 0.2s',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.84')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88a9.896 9.896 0 01-4.741-1.208l-.34-.203-3.522.923.939-3.43-.221-.352A9.86 9.86 0 012.085 12c0-5.514 4.486-10 10.003-10 2.67 0 5.18 1.04 7.068 2.93A9.927 9.927 0 0122.03 12c.003 5.516-4.482 10-10.001 10z" /></svg>
              Enviar via WhatsApp
            </button>
          </form>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', marginTop: '2px' }}>
            {[
              { name: 'DJ Cleo', handle: '@djcleoosilva', wa: '5511958033749' },
              //{ name: 'DJ Ruzão', handle: '@ruzao_dj', wa: '5511988888888' },
            ].map(dj => (
              <a key={dj.name} href={`https://wa.me/${dj.wa}`} target="_blank" rel="noopener noreferrer"
                style={{ textDecoration: 'none', background: '#111111', padding: '22px 24px', display: 'flex', alignItems: 'center', gap: '14px', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#161616')}
                onMouseLeave={e => (e.currentTarget.style.background = '#111111')}
              >
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: GOLD_DIM, border: `1px solid ${GOLD_BORDER}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill={GOLD}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88a9.896 9.896 0 01-4.741-1.208l-.34-.203-3.522.923.939-3.43-.221-.352A9.86 9.86 0 012.085 12c0-5.514 4.486-10 10.003-10 2.67 0 5.18 1.04 7.068 2.93A9.927 9.927 0 0122.03 12c.003 5.516-4.482 10-10.001 10z" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#f0ece4', marginBottom: '2px' }}>{dj.name}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(240,236,228,0.32)', letterSpacing: '0.06em' }}>{dj.handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: `1px solid ${GOLD_BORDER}`, padding: '40px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <img src={logoPng} alt="RACA Eventos" style={{ height: '32px', filter: 'brightness(0) invert(1)', opacity: 0.6 }} />
        <div style={{ fontSize: '11px', color: 'rgba(240,236,228,0.2)', letterSpacing: '0.08em' }}>
          © 2025 Raça Eventos — São Paulo
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          {[{ h: '@djcleoosilva', url: 'djcleoosilva' }, { h: '@ruzao_dj', url: 'ruzao_dj' }, { h: '@racaeventossp', url: 'racaeventossp' }].map(s => (
            <a key={s.h} href={`https://instagram.com/${s.url}`} target="_blank" rel="noopener noreferrer"
              style={{ textDecoration: 'none', fontSize: '11px', letterSpacing: '0.1em', color: 'rgba(240,236,228,0.28)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,236,228,0.28)')}
            >{s.h}</a>
          ))}
        </div>
      </footer>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
          header, section, footer { padding-left: 24px !important; padding-right: 24px !important; }
        }
        @media (max-width: 700px) {
          [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          [style*="grid-template-columns: 1fr 140px"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
