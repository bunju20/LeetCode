var findDifference = function(nums1, nums2) {

    const set1 = new Set(nums1);

    const set2 = new Set(nums2);

    const numsArr1 = [];

    const numsArr2 = [];

    

    for (const num of nums1) {

        if (!set2.has(num)) numsArr1.push(num);

    }

    for (const num of nums2) {

        if (!set1.has(num)) numsArr2.push(num);

    }

  

    return [[...new Set(numsArr1)], [...new Set(numsArr2)]];
    }