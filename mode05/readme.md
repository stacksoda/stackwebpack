Mode用来指定当前的构建环境是: production development 或 none
设置mode可以使用webpack内置的函数,默认值为production

mode的内置函数功能
development                 设置`process.env.NODE_ENV`的值为`development`.开启`NamedChunksPlugin`和`NamedModulesPlugin`.
production                  设置`process.env.NODE_ENV`的值为`production`.
                            开启`FlagDependencyUsagePlugin`,`FlagIncludedChunksPlugin`,
                            `ModuleConcatenationPlugin`,`NoEmitOnErrorsPlugin`,
                            `OccurrenceOrderPlugin`,`SideEffectsFlagPlugin`和`TerserPlugin`.
none                        不开启任何优化选项