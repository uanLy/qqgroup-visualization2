
// 查询SQL
module.exports =  {
    queryQQGraphSQL: {
        groupNode: `
            select
                groupNum as 'nodeGroupNum',
                mast as 'nodeMast',
                createDate as 'nodeCreateDate',
                title as 'nodeTitle',
                [class] as 'nodeClass',
                summary as 'nodeSummary'
            from
                qqJoinGroupInfoTable a
            where
                a.groupNum is not NULL and
                a.qqNum = ?
        `,
        memberNode: `
            select distinct
                a.qqNum as 'nodeQQNum'
            from
                qqJoinGroupInfoTable a
            where
                a.qqNum = ?
        `,
        link: `
            select
                qqNum as 'linkQQNum',
                nick as 'linkNick',
                age as 'linkAge',
                gender as 'linkGender',
                auth as 'linkAuth',
                joinGroupNum as 'linkGroupNum'
            from
                qqJoinGroupInfoTable a
            where
                a.qqNum = ?
        `,
    },
    queryGroupGraphSQL: {
        groupNode: `
            select distinct
                groupNum as 'nodeGroupNum',
                mast as 'nodeMast',
                createDate as 'nodeCreateDate',
                title as 'nodeTitle',
                [class] as 'nodeClass',
                summary as 'nodeSummary'
            from
                groupInfoTable a
            where
                a.groupNum = ?
        `,
        memberNode: `
            select
                qqNum as 'nodeQQNum'
            from
                groupInfoTable a
            where
                a.groupNum = ?
        `,
        link: `
            select
                qqNum as 'linkQQNum',
                nick as 'linkNick',
                age as 'linkAge',
                gender as 'linkGender',
                auth as 'linkAuth',
                joinGroupNum as 'linkGroupNum'
            from
                groupInfoTable a
            where
                a.groupNum = ?
        `,
    },
    queryQQExtGraphSQL: {
        groupNode: `
            select distinct
                joinGroupNum as 'nodeGroupNum',
                joinMast as 'nodeMast',
                joinCreateDate as 'nodeCreateDate',
                joinTitle as 'nodeTitle',
                joinClass as 'nodeClass',
                joinSummary as 'nodeSummary'
            from
                qqExtView a
            where
                a.joinGroupNum is not NULL and
                a.targetQQNum = ?
        `,
        memberNode: `
            select distinct
                memberQQNum as 'nodeQQNum'
            from
                qqExtView a
            where
                a.memberQQNum is not NULL and
                a.targetQQNum = ?
        `,
        link: `
            select
                memberQQNum as 'linkQQNum',
                memberNick as 'linkNick',
                memberAge as 'linkAge',
                memberGender as 'linkGender',
                memberAuth as 'linkAuth',
                memberGroupNum as 'linkGroupNum'
            from
                qqExtView a
            where
                a.targetQQNum = ?
        `,
    },
    queryQQTableSQL: {
        table: `
            select
                *
            from
                qqJoinGroupInfoTable a
            where
                qqNum = ?
        `,
    }, 
    queryGroupTableSQL: {
        table: `
            select
                *
            from
                groupInfoTable a
            where
                a.groupNum = ?
        `,
    },

};