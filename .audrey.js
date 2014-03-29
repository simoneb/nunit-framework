module.exports = {
  script: '$command /p:Configuration=Release /p:Framework=$framework "/t:DumpSettings;CleanAll;Build;Test"',
  requirements: {
    linux: [
      { type: 'which', input: 'xbuild' },
      { type: 'which', input: 'mono' },
      { type: 'cmd', input: 'mono --version', match: /3.\d/ },
      { type: 'js', input: "require('os').type()", match: /linux/i }
    ],
    win: [
      { type: 'js', input: "require('os').type()", match: /windows/i }
    ]
  },
  matrix: [
    { env: { framework: 'net-4.5', command: 'runbuild.cmd' }, requirements: ['win'] },
    { env: { framework: 'mono-4.5', command: './runbuild' }, timeout: 180, requirements: ['linux'] }
  ]
};