angular.module("AllSeasonsFarmApp")
  .config(function ($provide, $mdThemingProvider) {
    $mdThemingProvider.alwaysWatchTheme(true);
    // $mdThemingProvider.generateThemesOnDemand(true);
    $provide.value('themeProvider', $mdThemingProvider);

    $mdThemingProvider.theme("default")
      .primaryPalette('blue', {
        "default" : "700",
        'hue-1': '50',
        'hue-2': '300',
        'hue-3': '900'
      })
      .accentPalette('deep-orange',{
        "default" : "A200"
      })
      .warnPalette('red');

    $mdThemingProvider.definePalette('orange', {
      '50': '#FFF8E1',
      '100': '#FFECB3',
      '200': '#FFE082',
      '300': '#FFD54F',
      '400': '#FFCA28',
      '500': '#FFC107',
      '600': '#FFB300',
      '700': '#FFA000',
      '800': '#FF8F00',
      '900': '#FF6F00',
      'A100': '#FFE57F',
      'A200': '#FFD740',
      'A400': '#FFC400',
      'A700': '#FFAB00',   
      'contrastDefaultColor': 'light'
    });

    $mdThemingProvider.definePalette('green', {
      "50": "#E8F5E9",
      "100": "#C8E6C9",
      "200": "#A5D6A7",
      "300": "#81C784",
      "400": "#66BB6A",
      "500": "#4CAF50",
      "600": "#43A047",
      "700": "#388E3C",
      "800": "#2E7D32",
      "900": "#1B5E20",
      "A100": "#B9F6CA",
      "A200": "#69F0AE",
      "A400": "#00E676",
      "A700": "#00C853",
      'contrastDefaultColor': 'light'
    });

    $mdThemingProvider.definePalette('blue', {
      "50": "#E3F2FD",
      "100": "#BBDEFB",
      "200": "#90CAF9",
      "300": "#64B5F6",
      "400": "#42A5F5",
      "500": "#2196F3",
      "600": "#1E88E5",
      "700": "#1976D2",
      "800": "#1565C0",
      "900": "#0D47A1",
      "A100": "#82B1FF",
      "A200": "#448AFF",
      "A400": "#2979FF",
      "A700": "#2962FF",        
      'contrastDefaultColor': 'light'
    });

    $mdThemingProvider.definePalette('red', {
      "50": "#FFEBEE",
      "100": "#FFCDD2",
      "200": "#EF9A9A",
      "300": "#E57373",
      "400": "#EF5350",
      "500": "#F44336",
      "600": "#E53935",
      "700": "#D32F2F",
      "800": "#C62828",
      "900": "#B71C1C",
      "A100": "#FF8A80",
      "A200": "#FF5252",
      "A400": "#FF1744",
      "A700": "#D50000",
      'contrastDefaultColor': 'light'
    });

    $mdThemingProvider.definePalette('purple', {
      "50": "#F3E5F5",
      "100": "#E1BEE7",
      "200": "#CE93D8",
      "300": "#BA68C8",
      "400": "#AB47BC",
      "500": "#9C27B0",
      "600": "#8E24AA",
      "700": "#7B1FA2",
      "800": "#6A1B9A",
      "900": "#4A148C",
      "A100": "#EA80FC",
      "A200": "#E040FB",
      "A400": "#D500F9",
      "A700": "#AA00FF",
      'contrastDefaultColor': 'light'
    });
  })
