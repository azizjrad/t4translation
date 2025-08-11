# T4Translation Website - Internationalization Setup

## Arabic Language Support

This website now supports both English and Arabic languages with the following features:

### Features Added

- ✅ **Bilingual Support**: English and Arabic
- ✅ **RTL Layout**: Proper right-to-left layout for Arabic
- ✅ **Language Toggle**: Easy switching between languages
- ✅ **Persistent Language**: Language preference saved in localStorage
- ✅ **Automatic Detection**: Browser language detection on first visit
- ✅ **Responsive Design**: Language toggle works on both desktop and mobile

### Components

- **LanguageToggle**: Button component for switching languages
- **LanguageProvider**: Context provider for language state management
- **i18n Configuration**: Complete internationalization setup

### Usage

The language toggle button appears in the navbar and automatically switches between:

- English (EN) with UK flag
- Arabic (عربي) with Arabic flag

### Files Structure

```
src/
├── i18n/
│   ├── index.ts           # i18n configuration
│   └── locales/
│       ├── en.json        # English translations
│       └── ar.json        # Arabic translations
├── contexts/
│   └── LanguageContext.tsx # Language state management
└── components/
    └── LanguageToggle.tsx  # Language switch component
```

### Adding New Translations

1. Add new keys to both `en.json` and `ar.json`
2. Use `t('key')` in components with `useTranslation` hook
3. For nested keys use dot notation: `t('nav.home')`

### RTL Support

- Automatic direction switching
- Tailwind CSS RTL classes
- Proper spacing and margin adjustments
- Flag icons change based on target language

### Dependencies

- `react-i18next`: React integration for i18next
- `i18next`: Core internationalization framework
- `i18next-browser-languagedetector`: Browser language detection
