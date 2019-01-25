
// 查询SQL
export default {
    queryQQGraphSQL: `
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
            a.qqNum = 10000;
            
        select distinct
            a.qqNum as 'nodeQQNum'
        from
            qqJoinGroupInfoTable a
        where
            a.qqNum = 10000;
            
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
            a.qqNum = 10000;
    `,
    queryGroupGraphSQL: `
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
            a.groupNum = 3247846;

        select
            qqNum as 'nodeQQNum'
        from
            groupInfoTable a
        where
            a.groupNum = 3247846;
            
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
            a.groupNum = 3247846;
    `,
    queryQQExtGraphSQL: `
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
            a.targetQQNum = 10000;
            
        select distinct
            memberQQNum as 'nodeQQNum'
        from
            qqExtView a
        where
            a.memberQQNum is not NULL and
            a.targetQQNum = 10000;

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
            a.targetQQNum = 10000;
    `,
    queryQQTableSQL: `
        select
            *
        from
            qqJoinGroupInfoTable a
        where
            qqNum = 10000;
    `,
    queryGroupTableSQL: `
        select
            *
        from
            groupInfoTable a
        where
            a.groupNum = 4474685;
    `,
};